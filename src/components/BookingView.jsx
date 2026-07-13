import React, { useState, useEffect, useMemo } from "react";
import { Lock, Flame, Clock3, Check, X, Users, ChevronLeft, ChevronRight } from "lucide-react";

// Client booking view - three slot tiers: preferred (orange), open (white), reserved (dimmed).

const STYLES = `

/* remove iframe scrollbar — auto-resize handles height */
html, body {
  overflow: hidden;
  scrollbar-width: none;
  height: auto;
}
::-webkit-scrollbar { display: none; }

/* base */
.ab {
  --bg:          #0B0B0C;
  --surface:     #161617;
  --surface2:    #1C1C1E;
  --ink:         #FFFFFF;
  --muted:       #9C988F;
  --orange:      #F5841F;
  --orange-deep: #E5701A;
  --orange-tint: rgba(245, 132, 31, .13);
  --orange-bd:   rgba(245, 132, 31, .38);
  --blush:       #FFFFFF;
  --blush-tint:  rgba(255, 255, 255, .07);
  --blush-bd:    rgba(255, 255, 255, .30);
  --res:         #6A665F;
  --res-bd:      #2C2C30;
  --line:        #2A2A2D;
  --ring:        #F5841F;
  font-family: 'Inter', -apple-system, system-ui, sans-serif;
  color: var(--ink);
  background: var(--bg);
  min-height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
}
.ab * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.ab-serif { font-family: 'Cormorant', 'Georgia', serif; }
.ab-wrap  { max-width: 680px; margin: 0 auto; padding: 24px 16px 40px; flex: 1; }

/* header */
.ab-brand { text-align: center; padding: 6px 0 2px; }
.ab-logo  { height: 26px; width: auto; max-width: 260px; display: block; margin: 0 auto; object-fit: contain; }
.ab-rule  { height: 1px; background: var(--line); margin: 18px 0 0; }

/* page title */
.ab-h1 {
  font-family: 'Cormorant', serif;
  font-weight: 600;
  font-size: 46px;
  line-height: .98;
  letter-spacing: -.005em;
  margin: 22px 0 9px;
}
.ab-h1 .acc {
  font-style: italic;
  color: var(--blush);
  font-weight: 500;
}
.ab-sub {
  color: var(--muted);
  font-size: 14.5px;
  max-width: 50ch;
}

/* legend */
.ab-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 20px 0 4px;
}
.ab-key {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 500;
  color: var(--ink);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 6px 12px;
}
.ab-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

/* week navigation */
.ab-week-hd    { text-align: center; margin: 20px 0 8px; }
.ab-week-div   { height: 1px; background: var(--line); margin: 0 0 14px; }
.ab-week-month {
  font-family: 'Cormorant', serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--ink);
  margin-bottom: 12px;
}
.ab-week-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.ab-week-arr {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--muted);
  display: grid;
  place-items: center;
  cursor: pointer;
  flex: 0 0 auto;
  transition: background .12s, border-color .12s, color .12s;
}
.ab-week-arr:hover {
  background: var(--surface2);
  border-color: #3a3a3e;
  color: var(--ink);
}
.ab-days {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
}
.ab-days::-webkit-scrollbar { display: none; }
.ab-day {
  flex: 0 0 auto;
  min-width: 60px;
  text-align: center;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 15px;
  padding: 11px 9px;
  cursor: pointer;
  transition: transform .12s, background .12s, border-color .12s;
}
.ab-day:hover {
  transform: translateY(-1px);
  border-color: #3a3a3e;
}
.ab-day-dow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
}
.ab-day-num {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.15;
  letter-spacing: -.01em;
}
.ab-day.on { background: var(--orange); border-color: var(--orange); }
.ab-day.on .ab-day-dow,
.ab-day.on .ab-day-num { color: #0B0B0C; }
.ab-day-pref {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--orange);
  margin: 5px auto 0;
}
.ab-day.on .ab-day-pref { background: #0B0B0C; }

/* period labels */
.ab-period {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 24px 0 10px;
}

/* slot cards */
.ab-slot {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 15px 15px 15px 19px;
  margin-bottom: 11px;
  overflow: hidden;
  transition: transform .12s, box-shadow .12s, border-color .12s;
}
.ab-slot::before {
  content: "";
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
  background: var(--line);
}
.ab-slot.preferred { background: var(--orange-tint); border-color: var(--orange-bd); }
.ab-slot.preferred::before { background: var(--orange); }
.ab-slot.open      { background: var(--blush-tint);  border-color: var(--blush-bd);  }
.ab-slot.open::before      { background: var(--blush);  }
.ab-slot.reserved {
  background: repeating-linear-gradient(
    45deg,
    #121214, #121214 7px,
    #161618, #161618 14px
  );
  opacity: .5;
}
.ab-slot.reserved::before { background: var(--res-bd); }
.ab-slot.mine { background: var(--orange); border-color: var(--orange); opacity: 1; }
.ab-slot.mine::before { background: #0B0B0C; }

/* slot icon */
.ab-ico {
  width: 36px;
  height: 36px;
  border-radius: 11px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
}
.ab-slot.preferred .ab-ico { background: var(--orange);   color: #0B0B0C; }
.ab-slot.open      .ab-ico { background: var(--surface2); color: var(--blush); border: 1px solid var(--blush-bd); }
.ab-slot.reserved  .ab-ico { background: var(--surface2); color: var(--res);   border: 1px solid var(--res-bd);   }
.ab-slot.mine      .ab-ico { background: rgba(11, 11, 12, .18); color: #0B0B0C; }

/* slot body */
.ab-body { flex: 1; min-width: 0; }
.ab-eye {
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: .13em;
  text-transform: uppercase;
}
.ab-slot.preferred .ab-eye { color: var(--orange); }
.ab-slot.open      .ab-eye { color: var(--blush);  }
.ab-slot.reserved  .ab-eye { color: var(--res);    }
.ab-slot.mine      .ab-eye { color: #0B0B0C; opacity: .7; }
.ab-time {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 21px;
  line-height: 1.05;
  letter-spacing: -.01em;
}
.ab-slot.mine .ab-time { color: #0B0B0C; }
.ab-meta {
  font-size: 12.5px;
  color: var(--muted);
  margin-top: 2px;
}
.ab-slot.mine .ab-meta { color: #0B0B0C; opacity: .7; }
.ab-meta .ab-wl { display: inline-flex; align-items: center; gap: 4px; }

/* slot action buttons */
.ab-act { flex: 0 0 auto; }
.ab-btn {
  font-family: 'Inter';
  font-weight: 600;
  font-size: 13.5px;
  border-radius: 11px;
  padding: 10px 16px;
  border: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: filter .12s, transform .08s, background .12s, border-color .12s;
}
.ab-btn:active { transform: translateY(1px); }
.ab-btn:hover  { filter: brightness(1.06); }
.ab-btn-pref       { background: var(--orange); color: #0B0B0C; }
.ab-btn-open       { background: transparent; color: var(--ink); border-color: var(--blush-bd); }
.ab-btn-open:hover { border-color: var(--blush); filter: none; }
.ab-btn-wait       { background: transparent; color: var(--res); border-color: var(--res-bd); }
.ab-btn-wait:hover { border-color: var(--res); filter: none; }
.ab-btn-pill {
  background: rgba(11, 11, 12, .18);
  color: #0B0B0C;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* sessions bar */
.ab-foot {
  background: var(--surface);
  border-top: 1px solid var(--line);
  padding: 12px 16px;
  margin-top: 24px;
}
.ab-foot-in {
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
}
.ab-foot-h {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: .02em;
  white-space: nowrap;
  flex: 0 0 auto;
  text-transform: uppercase;
}
.ab-foot-tags {
  display: flex;
  gap: 6px;
  flex: 1;
  min-width: 0;
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 2px;
}
.ab-foot-tags::-webkit-scrollbar { display: none; }
.ab-tag {
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 500;
  background: var(--orange-tint);
  color: var(--orange);
  border: 1px solid var(--orange-bd);
  border-radius: 999px;
  padding: 4px 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.ab-tag.wait {
  background: var(--surface2);
  color: var(--res);
  border-color: var(--res-bd);
}
.ab-tag button {
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  display: grid;
  place-items: center;
  opacity: .6;
}
.ab-tag button:hover { opacity: 1; }
.ab-foot-empty { color: var(--muted); font-size: 13px; }

/* toast */
.ab-toast {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  background: var(--surface2);
  color: #fff;
  font-size: 13.5px;
  font-weight: 500;
  padding: 11px 16px;
  border-radius: 12px;
  border: 1px solid var(--line);
  box-shadow: 0 12px 30px -8px rgba(0, 0, 0, .6);
  display: flex;
  align-items: center;
  gap: 9px;
  z-index: 60;
  animation: ab-rise .22s ease;
}
.ab-toast .ic { color: var(--orange); }
@keyframes ab-rise {
  from { opacity: 0; transform: translate(-50%, 8px); }
  to   { opacity: 1; transform: translate(-50%, 0);   }
}

/* preferred-nudge modal */
.ab-scrim {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .62);
  backdrop-filter: blur(3px);
  display: grid;
  place-items: center;
  padding: 20px;
  z-index: 70;
  animation: ab-fade .15s ease;
}
@keyframes ab-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.ab-modal {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  max-width: 380px;
  width: 100%;
  padding: 24px;
  box-shadow: 0 24px 60px -12px rgba(0, 0, 0, .6);
  animation: ab-pop .18s ease;
}
@keyframes ab-pop {
  from { opacity: 0; transform: scale(.96); }
  to   { opacity: 1; transform: scale(1);   }
}
.ab-modal-ico {
  width: 44px;
  height: 44px;
  border-radius: 13px;
  background: var(--orange-tint);
  color: var(--orange);
  display: grid;
  place-items: center;
  margin-bottom: 14px;
}
.ab-modal h3 {
  font-family: 'Cormorant', serif;
  font-weight: 600;
  font-size: 29px;
  letter-spacing: -.01em;
  margin-bottom: 7px;
}
.ab-modal h3 .acc { font-style: italic; color: var(--blush); }
.ab-modal p {
  font-size: 14px;
  color: var(--muted);
  margin-bottom: 18px;
}
.ab-modal p b { color: var(--ink); font-weight: 600; }
.ab-modal-acts { display: flex; flex-direction: column; gap: 8px; }
.ab-modal-acts .ab-btn { width: 100%; padding: 13px; font-size: 14.5px; }
.ab-btn-line { background: transparent; color: var(--muted); border: none; }

/* focus and responsive */
.ab :focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) {
  .ab * { animation: none !important; transition: none !important; }
}
@media (max-width: 420px) {
  .ab-h1 { font-size: 38px; }
}
`;

const raw = {
  Mon: { num: 16, rows: [
    ["6:00 AM",  "Morning",   "preferred", 0],
    ["7:00 AM",  "Morning",   "reserved",  1],
    ["9:30 AM",  "Morning",   "open",      0],
    ["12:00 PM", "Afternoon", "open",      0],
    ["5:30 PM",  "Evening",   "preferred", 0],
    ["6:30 PM",  "Evening",   "reserved",  2],
  ]},
  Tue: { num: 17, rows: [
    ["6:30 AM",  "Morning",   "preferred", 0],
    ["8:00 AM",  "Morning",   "open",      0],
    ["11:00 AM", "Morning",   "reserved",  0],
    ["1:00 PM",  "Afternoon", "open",      0],
    ["5:00 PM",  "Evening",   "preferred", 0],
    ["7:00 PM",  "Evening",   "open",      0],
  ]},
  Wed: { num: 18, rows: [
    ["6:00 AM",  "Morning",   "reserved",  3],
    ["7:30 AM",  "Morning",   "preferred", 0],
    ["10:00 AM", "Morning",   "open",      0],
    ["2:00 PM",  "Afternoon", "open",      0],
    ["6:00 PM",  "Evening",   "preferred", 0],
  ]},
  Thu: { num: 19, rows: [
    ["6:30 AM",  "Morning",   "preferred", 0],
    ["9:00 AM",  "Morning",   "open",      0],
    ["12:30 PM", "Afternoon", "reserved",  1],
    ["5:30 PM",  "Evening",   "preferred", 0],
    ["7:00 PM",  "Evening",   "open",      0],
  ]},
  Fri: { num: 20, rows: [
    ["6:00 AM",  "Morning",   "preferred", 0],
    ["8:30 AM",  "Morning",   "open",      0],
    ["11:30 AM", "Morning",   "reserved",  0],
    ["4:30 PM",  "Evening",   "open",      0],
    ["6:00 PM",  "Evening",   "preferred", 0],
  ]},
  Sat: { num: 21, rows: [
    ["7:00 AM",  "Morning",   "preferred", 0],
    ["8:30 AM",  "Morning",   "preferred", 0],
    ["10:00 AM", "Morning",   "open",      0],
    ["11:30 AM", "Morning",   "reserved",  2],
  ]},
};

const DOW      = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const PERIODS  = ["Morning", "Afternoon", "Evening"];
const MONTHS   = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTHS_S = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function buildWeek() {
  const o = {};
  DOW.forEach(d => {
    o[d] = raw[d].rows.map((r, i) => ({
      id:       `${d}-${i}`,
      day:      d,
      time:     r[0],
      period:   r[1],
      tier:     r[2],
      waitlist: r[3],
    }));
  });
  return o;
}

const TIER = {
  preferred: { label: "Andrea's pick", dot: "#F5841F", icon: Flame  },
  open:      { label: "Open",          dot: "#FFFFFF", icon: Clock3 },
  reserved:  { label: "Reserved",      dot: "#3A3A40", icon: Lock   },
};

export default function BookingView({ liveSlots = null, onAction = null }) {
  const mockWeek                    = useMemo(buildWeek, []);
  const week                        = liveSlots ?? mockWeek;
  const [day, setDay]               = useState("Mon");
  const [weekOffset, setWeekOffset] = useState(0);
  const [booked, setBooked]         = useState({});
  const [waitlisted, setWaitlisted] = useState({});
  const [toast, setToast]           = useState(null);
  const [nudge, setNudge]           = useState(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(t);
  }, [toast]);

  useEffect(() => {
    if (!onAction) return;
    const today = new Date();
    const dow   = today.getDay();
    const mon   = new Date(today);
    mon.setDate(today.getDate() - (dow === 0 ? 6 : dow - 1) + weekOffset * 7);
    mon.setHours(0, 0, 0, 0);
    onAction({ type: "weekChange", mondayISO: mon.toISOString() });
  }, [weekOffset]); // eslint-disable-line react-hooks/exhaustive-deps

  const slots = week[day] || [];

  const byPeriod = useMemo(() => {
    const m = {};
    PERIODS.forEach(p => { m[p] = slots.filter(s => s.period === p); });
    return m;
  }, [slots]);

  // Sunday is getDay() === 0, which is 6 days after Monday, not 1 day before it.
  const weekDates = useMemo(() => {
    const today = new Date();
    const dow   = today.getDay();
    const mon   = new Date(today);
    mon.setDate(today.getDate() - (dow === 0 ? 6 : dow - 1) + weekOffset * 7);
    const d = {};
    DOW.forEach((k, i) => {
      const dt = new Date(mon);
      dt.setDate(mon.getDate() + i);
      d[k] = { num: dt.getDate(), month: dt.getMonth(), year: dt.getFullYear() };
    });
    return d;
  }, [weekOffset]);

  const monthLabel = useMemo(() => {
    const first = weekDates[DOW[0]];
    const last  = weekDates[DOW[DOW.length - 1]];
    if (first.month === last.month) {
      return `${MONTHS[first.month]} ${first.year}`;
    }
    return `${MONTHS_S[first.month]} - ${MONTHS_S[last.month]} ${last.year}`;
  }, [weekDates]);

  const fire = m => setToast(m);

  function doBook(s) {
    setBooked(b => ({ ...b, [s.id]: s }));
    setWaitlisted(w => { const n = { ...w }; delete n[s.id]; return n; });
    fire(`Booked - ${s.day}, ${s.time}`);
    onAction?.({ type: "book", slot: s });
  }

  function onBook(s) {
    if (s.tier === "open") {
      const alt = week[s.day].find(x => x.tier === "preferred" && !booked[x.id]);
      if (alt) { setNudge({ slot: s, alt }); return; }
    }
    doBook(s);
  }

  function onWaitlist(s) {
    const pos = (s.waitlist || 0) + 1;
    setWaitlisted(w => ({ ...w, [s.id]: { slot: s, pos } }));
    fire(`You're #${pos} on the waitlist - ${s.day}, ${s.time}`);
    onAction?.({ type: "waitlist", slot: s });
  }

  function cancelBooking(id) {
    setBooked(b => { const n = { ...b }; delete n[id]; return n; });
    fire("Booking canceled");
    onAction?.({ type: "cancel", slotId: id });
  }

  function leaveWaitlist(id) {
    setWaitlisted(w => { const n = { ...w }; delete n[id]; return n; });
    fire("Left the waitlist");
    onAction?.({ type: "leaveWaitlist", slotId: id });
  }

  const myBookings = Object.values(booked);
  const myWaits   = Object.values(waitlisted);

  return (
    <div className="ab">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');`}</style>
      <style>{STYLES}</style>

      <div className="ab-wrap">
        <h1 className="ab-h1">Book your <span className="acc">week.</span></h1>
        <p className="ab-sub">
          Reduce pain, build strength, move better - with Andrea in Lake Ridge.
          Highlighted times are the ones she recommends; booking them keeps her
          week flowing so there's more room for everyone.
        </p>

        <div className="ab-legend">
          <span className="ab-key">
            <span className="ab-dot" style={{ background: TIER.preferred.dot }} />
            Preferred - recommended
          </span>
          <span className="ab-key">
            <span className="ab-dot" style={{ background: TIER.open.dot }} />
            Open - available, not preferred
          </span>
          <span className="ab-key">
            <span className="ab-dot" style={{ background: TIER.reserved.dot }} />
            Reserved - join waitlist
          </span>
        </div>

        <div className="ab-week-hd">
          <div className="ab-week-month">{monthLabel}</div>
          <div className="ab-week-div" />
          <div className="ab-week-nav">
            <button
              className="ab-week-arr"
              onClick={() => setWeekOffset(o => o - 1)}
              aria-label="Previous week"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="ab-days">
              {DOW.map(d => {
                const hasPref = (week[d] || []).some(s => s.tier === "preferred");
                return (
                  <div
                    key={d}
                    className={`ab-day${d === day ? " on" : ""}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => setDay(d)}
                    onKeyDown={e => e.key === "Enter" && setDay(d)}
                  >
                    <div className="ab-day-dow">{d}</div>
                    <div className="ab-day-num">{weekDates[d].num}</div>
                    {hasPref && <span className="ab-day-pref" />}
                  </div>
                );
              })}
            </div>
            <button
              className="ab-week-arr"
              onClick={() => setWeekOffset(o => o + 1)}
              aria-label="Next week"
            >
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="ab-week-div" style={{ marginTop: 14 }} />
        </div>

        {PERIODS.map(p =>
          byPeriod[p].length ? (
            <div key={p}>
              <div className="ab-period">{p}</div>
              {byPeriod[p].map(slot => (
                <SlotCard
                  key={slot.id}
                  slot={slot}
                  mine={!!booked[slot.id]}
                  wait={waitlisted[slot.id]}
                  onBook={() => onBook(slot)}
                  onWaitlist={() => onWaitlist(slot)}
                  onCancel={() => cancelBooking(slot.id)}
                  onLeave={() => leaveWaitlist(slot.id)}
                />
              ))}
            </div>
          ) : null
        )}
      </div>

      <div className="ab-foot">
        <div className="ab-foot-in">
          <span className="ab-foot-h">Your sessions ({myBookings.length})</span>
          <div className="ab-foot-tags">
            {myBookings.length === 0 && myWaits.length === 0 && (
              <span className="ab-foot-empty">Nothing booked yet - tap a highlighted time.</span>
            )}
            {myBookings.map(s => (
              <span className="ab-tag" key={s.id}>
                {s.day} {s.time}
                <button onClick={() => cancelBooking(s.id)} aria-label="Cancel">
                  <X size={13} />
                </button>
              </span>
            ))}
            {myWaits.map(({ slot, pos }) => (
              <span className="ab-tag wait" key={slot.id}>
                <Users size={12} /> {slot.day} {slot.time} · #{pos}
                <button onClick={() => leaveWaitlist(slot.id)} aria-label="Leave">
                  <X size={13} />
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      {toast && (
        <div className="ab-toast">
          <Check size={16} className="ic" />
          {toast}
        </div>
      )}

      {nudge && (
        <div className="ab-scrim" onClick={() => setNudge(null)}>
          <div className="ab-modal" onClick={e => e.stopPropagation()}>
            <div className="ab-modal-ico"><Flame size={22} /></div>
            <h3>A <span className="acc">preferred</span> time close by</h3>
            <p>
              <b>{nudge.slot.time}</b> works, but Andrea has an open recommended
              slot at <b>{nudge.alt.time}</b> the same day. Choosing it helps her
              fit more clients in.
            </p>
            <div className="ab-modal-acts">
              <button
                className="ab-btn ab-btn-pref"
                onClick={() => { doBook(nudge.alt); setNudge(null); }}
              >
                Book {nudge.alt.time} instead
              </button>
              <button
                className="ab-btn ab-btn-line"
                onClick={() => { doBook(nudge.slot); setNudge(null); }}
              >
                Keep {nudge.slot.time}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SlotCard({ slot, mine, wait, onBook, onWaitlist, onCancel, onLeave }) {
  const cls     = mine ? "mine" : slot.tier;
  const Icon    = mine ? Check : TIER[slot.tier].icon;
  const eyebrow = mine ? "Your session" : TIER[slot.tier].label;

  return (
    <div className={`ab-slot ${cls}`}>
      <div className="ab-ico"><Icon size={18} /></div>
      <div className="ab-body">
        <div className="ab-eye">{eyebrow}</div>
        <div className="ab-time">{slot.time}</div>
        <div className="ab-meta">
          {mine
            ? "Confirmed · 60 min"
            : slot.tier === "reserved"
              ? wait
                ? <span className="ab-wl"><Users size={12} /> You're #{wait.pos} on the waitlist</span>
                : <span className="ab-wl"><Users size={12} /> {slot.waitlist > 0 ? `${slot.waitlist} waiting` : "Taken - be first to wait"}</span>
              : "Personal Training · 60 min"
          }
        </div>
      </div>
      <div className="ab-act">
        {mine ? (
          <button className="ab-btn ab-btn-pill" onClick={onCancel}>
            <X size={14} /> Cancel
          </button>
        ) : slot.tier === "reserved" ? (
          wait
            ? <button className="ab-btn ab-btn-wait" onClick={onLeave}>Leave waitlist</button>
            : <button className="ab-btn ab-btn-wait" onClick={onWaitlist}>Join waitlist</button>
        ) : slot.tier === "preferred" ? (
          <button className="ab-btn ab-btn-pref" onClick={onBook}>
            Book <ChevronRight size={14} style={{ verticalAlign: "-2px" }} />
          </button>
        ) : (
          <button className="ab-btn ab-btn-open" onClick={onBook}>Book</button>
        )}
      </div>
    </div>
  );
}
