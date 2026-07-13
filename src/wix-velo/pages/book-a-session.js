// ─────────────────────────────────────────────────────────────────────────────
// COPY THIS INTO:
//   Wix Editor → "Book a Session" page → Dev Mode → page code panel (bottom)
// ─────────────────────────────────────────────────────────────────────────────

import { currentMember } from 'wix-members';
import wixLocation from 'wix-location';
import wixBookingsFrontend from 'wix-bookings-frontend';
import { getWeekSlots, joinSlotWaitlist, cancelSlotBooking } from 'backend/bookingData';

const HTML_ELEMENT_ID = '#html2';

function getMonday(date) {
  const d   = new Date(date);
  const day = d.getDay();
  d.setDate(d.getDate() - (day === 0 ? 6 : day - 1));
  d.setHours(0, 0, 0, 0);
  return d;
}

$w.onReady(async function () {

  // Set a generous initial height immediately so there's no internal scroll from the start
  $w(HTML_ELEMENT_ID).height = 1400;

  // ── Register onMessage FIRST so resize events from the iframe aren't missed ─
  $w(HTML_ELEMENT_ID).onMessage(async (event) => {
    const msg = event.data;
    if (!msg?.type) return;

    // Expand iframe to full content height — no internal scroll
    if (msg.type === 'abate-resize') {
      $w(HTML_ELEMENT_ID).height = msg.height;
      return;
    }

    if (msg.type === 'abate-week') {
      try {
        const slots = await getWeekSlots(msg.mondayISO);
        $w(HTML_ELEMENT_ID).postMessage({ type: 'abate-data', slots });
      } catch (e) {
        console.error('Abate: week fetch failed', e);
      }
      return;
    }

    if (msg.type === 'abate-book') {
      try {
        // Navigate to Wix Bookings checkout — handles payment, email, and SMS natively
        await wixBookingsFrontend.navigate(msg.slotData.serviceId, {
          startDate: new Date(msg.slotData.startDate),
        });
      } catch (e) {
        $w(HTML_ELEMENT_ID).postMessage({ type: 'abate-error', slotId: msg.slotId, message: e.message || 'Could not open checkout.' });
      }
      return;
    }

    if (msg.type === 'abate-waitlist') {
      try {
        const bookingId = await joinSlotWaitlist(msg.slotData);
        $w(HTML_ELEMENT_ID).postMessage({ type: 'abate-waitlisted', slotId: msg.slotId, bookingId });
      } catch (e) {
        $w(HTML_ELEMENT_ID).postMessage({ type: 'abate-error', slotId: msg.slotId, message: e.message || 'Could not join waitlist.' });
      }
      return;
    }

    if (msg.type === 'abate-cancel' || msg.type === 'abate-leave-waitlist') {
      if (!msg.bookingId) return;
      try {
        await cancelSlotBooking(msg.bookingId);
        $w(HTML_ELEMENT_ID).postMessage({ type: 'abate-canceled', slotId: msg.slotId });
      } catch (e) {
        console.error('Abate: cancel failed', e);
      }
      return;
    }
  });

  // ── Role gate ──────────────────────────────────────────────────────────────
  let member;
  try { member = await currentMember.getMember(); } catch (e) { member = null; }
  if (!member) { wixLocation.to('/'); return; }

  const roles      = await currentMember.getRoles();
  const roleTitles = roles.map(r => r.title);
  const isActive   =
    roleTitles.includes('Active Client (In-person)') ||
    roleTitles.includes('Active Client (Online)');

  if (!isActive) { wixLocation.to('/'); return; }

  // ── Load this week's slots ─────────────────────────────────────────────────
  const monday = getMonday(new Date());
  let weekSlots;
  try {
    weekSlots = await getWeekSlots(monday.toISOString());
  } catch (e) {
    console.error('Abate: failed to load slots', e);
    weekSlots = {};
  }

  // ── Send mode then data to iframe ─────────────────────────────────────────
  $w(HTML_ELEMENT_ID).postMessage({ type: 'abate-mode', mode: 'client' });
  $w(HTML_ELEMENT_ID).postMessage({
    type:   'abate-data',
    slots:  weekSlots,
    member: {
      name: member.profile?.nickname || member.contactDetails?.firstName || '',
    },
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// slotPreferences COLLECTION SETUP (one-time, in Wix CMS)
//
// Wix Dashboard → CMS → + New Collection → name it exactly: slotPreferences
//
// Fields:
//   dayOfWeek  (Text)  — Mon Tue Wed Thu Fri Sat
//   time       (Text)  — "6:00 AM", "9:30 AM", etc.
//   tier       (Text)  — preferred  OR  open
//
// Permissions: Anyone can read, only Admins can write.
// ─────────────────────────────────────────────────────────────────────────────
