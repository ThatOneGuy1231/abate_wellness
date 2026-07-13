// ─────────────────────────────────────────────────────────────────────────────
// COPY THIS INTO:
//   Wix Editor → "Availability Editor" page → Dev Mode → page code panel (bottom)
//
// SETUP STEPS:
//   1. Create a new page in Wix (hidden from nav, e.g. "/availability-editor")
//   2. Add an HTML element to the page
//   3. Set its URL to: https://dapper-cheesecake-88f409.netlify.app?view=admin
//   4. Check its ID in the Properties panel and update HTML_ELEMENT_ID below
// ─────────────────────────────────────────────────────────────────────────────

import { getSlotPreferences, saveSlotPreferences } from 'backend/bookingData';

const HTML_ELEMENT_ID = '#html1'; // ← update after adding the HTML element and checking its ID

$w.onReady(async function () {

  $w(HTML_ELEMENT_ID).height = 1400;

  // Register onMessage FIRST so resize events aren't missed
  $w(HTML_ELEMENT_ID).onMessage(async (event) => {
    const msg = event.data;
    if (!msg?.type) return;

    if (msg.type === 'abate-resize') {
      $w(HTML_ELEMENT_ID).height = msg.height;
      return;
    }

    if (msg.type === 'abate-save-prefs') {
      try {
        await saveSlotPreferences(msg.items);
        $w(HTML_ELEMENT_ID).postMessage({ type: 'abate-prefs-saved' });
      } catch (e) {
        console.error('Abate: save prefs failed', e);
        $w(HTML_ELEMENT_ID).postMessage({ type: 'abate-prefs-error', message: e.message || 'Save failed.' });
      }
      return;
    }
  });

  // Tell the iframe it's in admin mode, then send preferences
  $w(HTML_ELEMENT_ID).postMessage({ type: 'abate-mode', mode: 'admin' });

  let prefs = [];
  try {
    prefs = await getSlotPreferences();
  } catch (e) {
    console.error('Abate: failed to load prefs', e);
  }

  $w(HTML_ELEMENT_ID).postMessage({ type: 'abate-prefs', prefs });
});
