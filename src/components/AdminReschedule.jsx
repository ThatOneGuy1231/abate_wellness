import React, { useState, useMemo, useRef, useEffect } from "react";
import { Flame, Clock3, Check, X, ArrowLeft, Send, MessageSquare, Mail,
         Calendar, RefreshCw, ChevronRight, ChevronDown, User, Search } from "lucide-react";
import logo from "../assets/logo.png";

// Trainer reschedule flow: schedule > picker > sent > client > done.
// Everything runs in-memory; maps onto Velo collections + Twilio + Bookings API later.

const STYLES = `

/* base */
.fg {
  --bg:          #0B0B0C;
  --surface:     #161617;
  --surface2:    #1C1C1E;
  --ink:         #FFFFFF;
  --muted:       #9C988F;
  --orange:      #F5841F;
  --orange-tint: rgba(245, 132, 31, .13);
  --orange-bd:   rgba(245, 132, 31, .38);
  --open:        #FFFFFF;
  --open-tint:   rgba(255, 255, 255, .07);
  --open-bd:     rgba(255, 255, 255, .30);
  --res:         #6A665F;
  --res-bd:      #2C2C30;
  --line:        #2A2A2D;
  --ring:        #F5841F;
  font-family: 'Inter', -apple-system, system-ui, sans-serif;
  color: var(--ink);
  background: var(--bg);
  min-height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  line-height: 1.45;
}
.fg * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.fg-wrap { max-width: 680px; margin: 0 auto; padding: 24px 16px 130px; }

/* header */
.fg-bar       { text-align: center; padding: 6px 0 2px; }
.fg-logo      { height: 26px; width: auto; max-width: 260px; display: block; margin: 0 auto; object-fit: contain; }
.fg-rule      { height: 1px; background: var(--line); margin: 18px 0 0; }
.fg-role-wrap { text-align: center; margin: 12px 0 14px; }
.fg-role {
  display: inline-flex;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--muted);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 4px 10px;
}
.fg-role.client {
  color: var(--orange);
  border-color: var(--orange-bd);
  background: var(--orange-tint);
}

/* back button */
.fg-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: var(--muted);
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 0;
  margin-top: 4px;
}
.fg-back:hover { color: var(--ink); }

/* page titles */
.fg-h1 {
  font-family: 'Cormorant', serif;
  font-weight: 600;
  font-size: 38px;
  line-height: 1.02;
  letter-spacing: -.01em;
  margin: 6px 0 4px;
}
.fg-sub {
  color: var(--muted);
  font-size: 13.5px;
  max-width: 46ch;
}

/* period labels and search row */
.fg-period {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 20px 0 10px;
}
.fg-period-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0 10px;
}
.fg-period-row .fg-period { margin: 0; flex: 0 0 auto; }
.fg-search {
  display: flex;
  align-items: center;
  gap: 7px;
  background: var(--surface2);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 6px 10px;
  flex: 1;
  min-width: 0;
}
.fg-search input {
  background: none;
  border: none;
  outline: none;
  color: var(--ink);
  font-family: 'Inter';
  font-size: 13px;
  width: 100%;
  min-width: 0;
}
.fg-search input::placeholder { color: var(--muted); }
.fg-search svg { color: var(--muted); flex: 0 0 auto; }

/* date filter dropdown */
.fg-sel { position: relative; flex: 0 0 auto; }
.fg-sel-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--surface2);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 6px 10px;
  color: var(--muted);
  font-family: 'Inter';
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition: border-color .12s, color .12s;
}
.fg-sel-btn:hover,
.fg-sel-btn.open { border-color: #3a3a3e; color: var(--ink); }
.fg-sel-btn svg { transition: transform .15s; }
.fg-sel-btn.open svg:last-child { transform: rotate(180deg); }
.fg-sel-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 4px;
  z-index: 50;
  min-width: 130px;
  box-shadow: 0 12px 30px -8px rgba(0, 0, 0, .7);
  animation: ab-pop .14s ease;
}
.fg-sel-opt {
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  color: var(--muted);
  font-family: 'Inter';
  font-size: 13px;
  font-weight: 500;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background .1s, color .1s;
  white-space: nowrap;
}
.fg-sel-opt:hover { background: var(--surface2); color: var(--ink); }
.fg-sel-opt.on    { color: var(--orange); background: var(--orange-tint); }
.fg-no-results    { text-align: center; color: var(--muted); font-size: 13.5px; padding: 24px 0; }

/* booking cards (schedule view) */
.fg-card {
  display: flex;
  align-items: center;
  gap: 13px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 15px;
  padding: 13px 13px 13px 19px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
}
.fg-card::before {
  content: "";
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 4px;
  background: var(--line);
}
.fg-card.preferred::before { background: var(--orange); }
.fg-card.open::before      { background: var(--open);   }
.fg-card.moved::before     { background: var(--orange); }
.fg-av {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--surface2);
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 14px;
  color: var(--muted);
  flex: 0 0 auto;
}
.fg-c-body { flex: 1; min-width: 0; }
.fg-c-name { font-weight: 600; font-size: 14.5px; }
.fg-c-when { font-weight: 700; font-size: 17px; margin-top: 1px; }
.fg-c-meta {
  font-size: 11.5px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 1px;
}
.fg-pill {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: 999px;
}
.fg-pill.moved   { background: var(--orange-tint); color: var(--orange); }
.fg-pill.pending { background: var(--open-tint);   color: var(--open);   }
.fg-c-acts { display: flex; flex-direction: column; gap: 6px; flex: 0 0 auto; }
.fg-mini {
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12.5px;
  border-radius: 9px;
  padding: 7px 12px;
  cursor: pointer;
  border: 1px solid var(--line);
  background: var(--surface2);
  color: var(--ink);
  white-space: nowrap;
  transition: filter .1s;
}
.fg-mini:hover { filter: brightness(1.08); }
.fg-mini.dark  { background: var(--orange); color: #0B0B0C; border-color: var(--orange); }
.fg-mini.ghost { border: none; color: var(--muted); background: transparent; }

/* slot picker cards */
.fg-slot {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--surface);
  border: 1.5px solid var(--line);
  border-radius: 14px;
  padding: 13px 14px;
  margin-bottom: 9px;
  cursor: pointer;
  transition: border-color .12s, background .12s, transform .1s;
}
.fg-slot:hover { transform: translateY(-1px); }
.fg-slot.preferred { background: var(--orange-tint); border-color: var(--orange-bd); }
.fg-slot.open      { background: var(--open-tint);   border-color: var(--open-bd);   }
.fg-slot.sel       { border-color: var(--orange); box-shadow: 0 0 0 1px var(--orange); }
.fg-slot.disabled  { opacity: .5; cursor: not-allowed; background: var(--surface2); }
.fg-slot.disabled:hover { transform: none; }
.fg-s-ico {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
}
.fg-slot.preferred .fg-s-ico { background: var(--orange);   color: #0B0B0C; }
.fg-slot.open      .fg-s-ico { background: var(--surface2); color: var(--open); border: 1px solid var(--open-bd); }
.fg-slot.disabled  .fg-s-ico { background: var(--surface2); color: var(--res);  border: 1px solid var(--res-bd);  }
.fg-s-body { flex: 1; min-width: 0; }
.fg-s-eye {
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: .13em;
  text-transform: uppercase;
}
.fg-slot.preferred .fg-s-eye { color: var(--orange); }
.fg-slot.open      .fg-s-eye { color: var(--open);   }
.fg-slot.disabled  .fg-s-eye { color: var(--res);    }
.fg-s-time { font-weight: 700; font-size: 20px; }
.fg-check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid var(--line);
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  color: #0B0B0C;
  transition: background .12s, border-color .12s;
}
.fg-slot.sel .fg-check { background: var(--orange); border-color: var(--orange); }

/* sticky action bar */
.fg-actbar {
  position: fixed;
  left: 0; right: 0; bottom: 0;
  background: rgba(11, 11, 12, .92);
  backdrop-filter: blur(10px);
  border-top: 1px solid var(--line);
  padding: 12px 14px;
  z-index: 40;
}
.fg-actbar-in {
  max-width: 560px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
}
.fg-actbar-txt { flex: 1; min-width: 0; }
.fg-actbar-h   { font-weight: 700; font-size: 16px; }
.fg-actbar-s   { font-size: 12px; color: var(--muted); }
.fg-btn {
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14.5px;
  border-radius: 12px;
  padding: 13px 18px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: filter .12s, transform .08s;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  justify-content: center;
}
.fg-btn:active   { transform: translateY(1px); }
.fg-btn:hover    { filter: brightness(1.06); }
.fg-btn:disabled { opacity: .4; cursor: not-allowed; }
.fg-btn-pref { background: var(--orange); color: #0B0B0C; }
.fg-btn-dark { background: var(--surface2); color: var(--ink); border-color: var(--line); }
.fg-btn-full { width: 100%; }

/* sent / done panels */
.fg-panel {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 24px 20px;
  text-align: center;
  margin-top: 8px;
}
.fg-burst {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: var(--orange);
  color: #0B0B0C;
  display: grid;
  place-items: center;
  margin: 0 auto 14px;
}
.fg-panel h2 {
  font-family: 'Cormorant', serif;
  font-weight: 600;
  font-size: 32px;
  letter-spacing: -.01em;
  margin-bottom: 6px;
}
.fg-panel p {
  color: var(--muted);
  font-size: 14px;
  max-width: 38ch;
  margin: 0 auto 8px;
}
.fg-panel p b { color: var(--ink); font-weight: 600; }

/* simulated message previews */
.fg-msgs {
  text-align: left;
  margin: 18px 0 6px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.fg-msg {
  background: var(--surface2);
  border: 1px solid var(--line);
  border-radius: 13px;
  padding: 12px 13px;
}
.fg-msg-h {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 6px;
}
.fg-msg-b  { font-size: 13px; line-height: 1.5; color: var(--muted); }
.fg-link   { color: var(--orange); font-weight: 600; text-decoration: underline; }
.fg-newtime {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--orange-tint);
  border: 1px solid var(--orange-bd);
  border-radius: 12px;
  padding: 10px 16px;
  font-weight: 700;
  font-size: 22px;
  color: var(--orange);
  margin: 6px 0 4px;
}

/* reset button */
.fg-demo  { display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 18px; }
.fg-reset {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: var(--muted);
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
}
.fg-reset:hover { color: var(--ink); }

/* focus */
.fg :focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) {
  .fg * { transition: none !important; }
}
`;

// Available times for the picker: [day, date number, [[time, tier], ...]]
const WEEK = [
  ["Mon", 16, [["6:00 AM","preferred"], ["9:30 AM","open"],  ["12:00 PM","open"], ["5:30 PM","preferred"]]],
  ["Tue", 17, [["6:30 AM","preferred"], ["8:00 AM","open"],  ["1:00 PM","open"],  ["5:00 PM","preferred"]]],
  ["Wed", 18, [["7:30 AM","preferred"], ["10:00 AM","open"], ["6:00 PM","preferred"]]],
  ["Thu", 19, [["6:30 AM","preferred"], ["9:00 AM","open"],  ["5:30 PM","preferred"], ["7:00 PM","open"]]],
  ["Fri", 20, [["6:00 AM","preferred"], ["8:30 AM","open"],  ["4:30 PM","open"]]],
];

// Flatten WEEK into a lookup map keyed by slot id.
const ALL = {};
WEEK.forEach(([day, num, rows]) => {
  rows.forEach(([time, tier], i) => {
    const id = `${day}-${i}`;
    ALL[id] = { id, day, num, time, tier };
  });
});

const initialBookings = [
  { id: "b1", name: "Jordan Lee",  day: "Tue", num: 17, time: "7:00 PM",  tier: "open",      status: null },
  { id: "b2", name: "Priya Shah",  day: "Wed", num: 18, time: "6:00 PM",  tier: "preferred", status: null },
  { id: "b3", name: "Marcus Reed", day: "Fri", num: 20, time: "6:00 AM",  tier: "preferred", status: null },
  { id: "b4", name: "Dana Cole",   day: "Thu", num: 19, time: "12:30 PM", tier: "open",      status: null },
];

const initials = n => n.split(" ").map(w => w[0]).join("").slice(0, 2);
const TIER = {
  preferred: { eye: "Preferred", icon: Flame  },
  open:      { eye: "Open",      icon: Clock3 },
};

export default function AdminReschedule() {
  const [mode, setMode]           = useState("schedule"); // schedule | picker | sent | client | done
  const [bookings, setBookings]   = useState(initialBookings);
  const [active, setActive]       = useState(null);       // booking being changed
  const [picked, setPicked]       = useState(new Set());  // offered slot ids
  const [chosen, setChosen]       = useState(null);       // slot id client picked
  const [search, setSearch]       = useState("");
  const [filterDay, setFilterDay] = useState("");
  const [dayOpen, setDayOpen]     = useState(false);
  const dayRef = useRef(null);

  // Close the date dropdown when clicking outside it.
  useEffect(() => {
    if (!dayOpen) return;
    const handler = e => { if (!dayRef.current?.contains(e.target)) setDayOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dayOpen]);

  const isClient = mode === "client" || mode === "done";

  function startChange(b) {
    setActive(b);
    setPicked(new Set());
    setMode("picker");
  }

  function toggle(id) {
    setPicked(p => {
      const n = new Set(p);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
  }

  function send()         { setMode("sent"); }
  function openAsClient() { setChosen(null); setMode("client"); }

  function confirmClient() {
    const slot = ALL[chosen];
    setBookings(bs => bs.map(b =>
      b.id === active.id
        ? { ...b, day: slot.day, num: slot.num, time: slot.time, tier: slot.tier, status: "moved" }
        : b
    ));
    setMode("done");
  }

  function reset() {
    setBookings(initialBookings);
    setActive(null);
    setPicked(new Set());
    setChosen(null);
    setMode("schedule");
  }

  const offered = useMemo(() => [...picked].map(id => ALL[id]), [picked]);

  // One option per unique calendar date (day + number), sorted chronologically.
  const dayOptions = useMemo(() => {
    const seen = new Set();
    return bookings
      .filter(b => { const k = `${b.day}-${b.num}`; if (seen.has(k)) return false; seen.add(k); return true; })
      .sort((a, b) => a.num - b.num)
      .map(b => ({ key: `${b.day}-${b.num}`, label: `${b.day} ${b.num}` }));
  }, [bookings]);

  const filtered = useMemo(() =>
    bookings.filter(b =>
      b.name.toLowerCase().includes(search.toLowerCase()) &&
      (!filterDay || `${b.day}-${b.num}` === filterDay)
    ),
  [bookings, search, filterDay]);

  return (
    <div className="fg">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');`}</style>
      <style>{STYLES}</style>

      <div className="fg-wrap">
        <div className="fg-bar">
          <img className="fg-logo" src={logo} alt="Abate Wellness" />
        </div>
        <div className="fg-rule" />
        <div className="fg-role-wrap">
          <span className={`fg-role${isClient ? " client" : ""}`}>
            {isClient ? "Client view" : "Trainer - Andrea"}
          </span>
        </div>

        {/* 1. Schedule */}
        {mode === "schedule" && (
          <>
            <h1 className="fg-h1">This week's sessions</h1>
            <p className="fg-sub">
              Tap <b>Change</b> on a session to offer the client new times. They'll get
              a text and email to pick from - no chasing needed.
            </p>

            <div className="fg-period-row">
              <div className="fg-period">Upcoming</div>
              <div className="fg-search">
                <Search size={13} />
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search client..."
                />
              </div>
              <div className="fg-sel" ref={dayRef}>
                <button
                  className={`fg-sel-btn${dayOpen ? " open" : ""}`}
                  onClick={() => setDayOpen(o => !o)}
                >
                  {filterDay ? dayOptions.find(o => o.key === filterDay)?.label : "All dates"}
                  <ChevronDown size={13} />
                </button>
                {dayOpen && (
                  <div className="fg-sel-menu">
                    <button
                      className={`fg-sel-opt${!filterDay ? " on" : ""}`}
                      onClick={() => { setFilterDay(""); setDayOpen(false); }}
                    >
                      All dates
                    </button>
                    {dayOptions.map(o => (
                      <button
                        key={o.key}
                        className={`fg-sel-opt${filterDay === o.key ? " on" : ""}`}
                        onClick={() => { setFilterDay(o.key); setDayOpen(false); }}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {filtered.length === 0 && (
              <div className="fg-no-results">No sessions match.</div>
            )}
            {filtered.map(b => {
              const T    = TIER[b.tier] || TIER.open;
              const Icon = T.icon;
              return (
                <div key={b.id} className={`fg-card ${b.status === "moved" ? "moved" : b.tier}`}>
                  <div className="fg-av">{initials(b.name)}</div>
                  <div className="fg-c-body">
                    <div className="fg-c-name">{b.name}</div>
                    <div className="fg-c-when">{b.day}, {b.time}</div>
                    <div className="fg-c-meta">
                      <Icon size={11} /> 60 min
                      {b.status === "moved" && <span className="fg-pill moved">Rescheduled</span>}
                    </div>
                  </div>
                  <div className="fg-c-acts">
                    <button className="fg-mini dark" onClick={() => startChange(b)}>Change</button>
                    <button className="fg-mini ghost">Cancel</button>
                  </div>
                </div>
              );
            })}

            <div className="fg-demo">
              <button className="fg-reset" onClick={reset}>
                <RefreshCw size={13} /> Reset demo
              </button>
            </div>
          </>
        )}

        {/* 2. Picker */}
        {mode === "picker" && active && (
          <>
            <button className="fg-back" onClick={() => setMode("schedule")}>
              <ArrowLeft size={15} /> Schedule
            </button>
            <h1 className="fg-h1">New times for {active.name.split(" ")[0]}</h1>
            <p className="fg-sub">
              Moving their <b>{active.day}, {active.time}</b> session. Pick a few
              openings that work - {active.name.split(" ")[0]} chooses the final one.
            </p>
            {WEEK.map(([day, num, rows]) => (
              <div key={day}>
                <div className="fg-period">{day} · {num}</div>
                {rows.map(([time, tier], i) => {
                  const id   = `${day}-${i}`;
                  const sel  = picked.has(id);
                  const Icon = TIER[tier].icon;
                  return (
                    <div
                      key={id}
                      className={`fg-slot ${tier}${sel ? " sel" : ""}`}
                      role="button"
                      tabIndex={0}
                      onClick={() => toggle(id)}
                      onKeyDown={e => e.key === "Enter" && toggle(id)}
                    >
                      <div className="fg-s-ico"><Icon size={16} /></div>
                      <div className="fg-s-body">
                        <div className="fg-s-eye">{TIER[tier].eye}</div>
                        <div className="fg-s-time">{time}</div>
                      </div>
                      <div className="fg-check">{sel && <Check size={15} />}</div>
                    </div>
                  );
                })}
              </div>
            ))}
          </>
        )}

        {/* 3. Sent */}
        {mode === "sent" && active && (
          <>
            <div className="fg-panel">
              <div className="fg-burst"><Send size={26} /></div>
              <h2>Sent to {active.name.split(" ")[0]}</h2>
              <p>
                We texted and emailed <b>{active.name}</b> {offered.length} time
                {offered.length !== 1 ? "s" : ""} to choose from. Their pick will
                update your calendar automatically.
              </p>
              <div className="fg-msgs">
                <div className="fg-msg">
                  <div className="fg-msg-h"><MessageSquare size={13} /> Text message</div>
                  <div className="fg-msg-b">
                    Hi {active.name.split(" ")[0]} - Andrea needs to move your {active.day}{" "}
                    {active.time} session. Tap to pick a new time:{" "}
                    <span className="fg-link">abatewellness.com/r/{active.id}</span>
                  </div>
                </div>
                <div className="fg-msg">
                  <div className="fg-msg-h"><Mail size={13} /> Email</div>
                  <div className="fg-msg-b">
                    Subject: Let's find a new time for your session<br />
                    Andrea offered {offered.length} option{offered.length !== 1 ? "s" : ""} -{" "}
                    <span className="fg-link">choose yours here</span>.
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 9 }}>
              <button className="fg-btn fg-btn-pref fg-btn-full" onClick={openAsClient}>
                Open the link as {active.name.split(" ")[0]} <ChevronRight size={16} />
              </button>
              <button className="fg-btn fg-btn-dark fg-btn-full" onClick={() => setMode("schedule")}>
                Back to schedule
              </button>
            </div>
          </>
        )}

        {/* 4. Client */}
        {mode === "client" && active && (
          <>
            <h1 className="fg-h1">Pick a new time</h1>
            <p className="fg-sub">
              Hi {active.name.split(" ")[0]} - Andrea needs to move your{" "}
              <b>{active.day}, {active.time}</b> session. Here are the times she has open:
            </p>
            <div style={{ marginTop: 16 }}>
              {offered.map(s => {
                const selc = chosen === s.id;
                const Icon = TIER[s.tier].icon;
                return (
                  <div
                    key={s.id}
                    className={`fg-slot ${s.tier}${selc ? " sel" : ""}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => setChosen(s.id)}
                    onKeyDown={e => e.key === "Enter" && setChosen(s.id)}
                  >
                    <div className="fg-s-ico"><Icon size={16} /></div>
                    <div className="fg-s-body">
                      <div className="fg-s-eye">{s.day}</div>
                      <div className="fg-s-time">{s.time}</div>
                    </div>
                    <div className="fg-check">{selc && <Check size={15} />}</div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* 5. Done */}
        {mode === "done" && active && chosen && (
          <>
            <div className="fg-panel">
              <div className="fg-burst"><Check size={30} /></div>
              <h2>You're all set, {active.name.split(" ")[0]}!</h2>
              <p>Your session is moved to:</p>
              <div className="fg-newtime">
                <Calendar size={18} /> {ALL[chosen].day}, {ALL[chosen].time}
              </div>
              <p>Andrea's calendar updated automatically - no back-and-forth needed.</p>
            </div>
            <div style={{ marginTop: 14 }}>
              <button className="fg-btn fg-btn-dark fg-btn-full" onClick={() => setMode("schedule")}>
                <User size={15} /> Back to trainer view (see it updated)
              </button>
            </div>
          </>
        )}
      </div>

      {/* Picker action bar */}
      {mode === "picker" && (
        <div className="fg-actbar">
          <div className="fg-actbar-in">
            <div className="fg-actbar-txt">
              <div className="fg-actbar-h">{picked.size} time{picked.size !== 1 ? "s" : ""} selected</div>
              <div className="fg-actbar-s">
                {picked.size === 0
                  ? "Tap openings to offer"
                  : `Sent to ${active.name.split(" ")[0]} to choose`
                }
              </div>
            </div>
            <button className="fg-btn fg-btn-pref" disabled={picked.size === 0} onClick={send}>
              <Send size={15} /> Send
            </button>
          </div>
        </div>
      )}

      {/* Client confirm bar */}
      {mode === "client" && (
        <div className="fg-actbar">
          <div className="fg-actbar-in">
            <button className="fg-btn fg-btn-pref fg-btn-full" disabled={!chosen} onClick={confirmClient}>
              {chosen ? `Confirm ${ALL[chosen].day}, ${ALL[chosen].time}` : "Select a time above"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
