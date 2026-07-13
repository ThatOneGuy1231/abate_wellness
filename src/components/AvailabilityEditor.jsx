import React, { useState, useMemo, useEffect } from "react";
import { Flame, Clock3, Lock, X, Plus, Check, ChevronLeft, ChevronRight } from "lucide-react";

const STYLES = `

/* no internal iframe scrolling; body grows freely with content */
html { overflow: hidden; scrollbar-width: none; }
html::-webkit-scrollbar { display: none; }
body { margin: 0; }

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
  --np:          #FFFFFF;
  --np-tint:     rgba(255, 255, 255, .07);
  --np-line:     rgba(255, 255, 255, .30);
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
.fg * { box-sizing: border-box; margin: 0; padding: 0; }
.fg-wrap { max-width: 680px; margin: 0 auto; padding: 24px 16px 40px; }

/* page title */
.fg-h1 {
  font-family: 'Cormorant', serif;
  font-weight: 600;
  font-size: 38px;
  line-height: 1.02;
  letter-spacing: -.01em;
  margin: 4px 0 4px;
}
.fg-sub { color: var(--muted); font-size: 13.5px; max-width: 48ch; }

/* legend */
.fg-legend { display: flex; flex-wrap: wrap; gap: 7px; margin: 15px 0 4px; }
.fg-key {
  display: flex; align-items: center; gap: 7px;
  font-size: 12px; font-weight: 500; color: var(--ink);
  background: var(--surface); border: 1px solid var(--line);
  border-radius: 999px; padding: 6px 11px;
}
.fg-dot { width: 9px; height: 9px; border-radius: 3px; }

/* week navigation */
.fg-week-hd    { text-align: center; margin: 20px 0 8px; }
.fg-week-div   { height: 1px; background: var(--line); margin: 0 0 14px; }
.fg-week-month {
  font-family: 'Cormorant', serif; font-size: 18px; font-weight: 600;
  letter-spacing: .12em; text-transform: uppercase; color: var(--ink); margin-bottom: 12px;
}
.fg-week-nav { display: flex; align-items: center; justify-content: center; gap: 10px; }
.fg-week-arr {
  width: 34px; height: 34px; border-radius: 10px;
  background: var(--surface); border: 1px solid var(--line);
  color: var(--muted); display: grid; place-items: center;
  cursor: pointer; flex: 0 0 auto;
  transition: background .12s, border-color .12s, color .12s;
}
.fg-week-arr:hover { background: var(--surface2); border-color: #3a3a3e; color: var(--ink); }
.fg-days { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; }
.fg-days::-webkit-scrollbar { display: none; }
.fg-day {
  flex: 0 0 auto; min-width: 58px; text-align: center;
  background: var(--surface); border: 1px solid var(--line);
  border-radius: 14px; padding: 9px 8px; cursor: pointer;
  transition: transform .12s, background .12s, border-color .12s;
}
.fg-day:hover { transform: translateY(-1px); border-color: #3a3a3e; }
.fg-day-dow { font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; color: var(--muted); }
.fg-day-num { font-weight: 700; font-size: 20px; line-height: 1.15; }
.fg-day-c   { font-size: 10px; color: var(--muted); margin-top: 1px; }
.fg-day.on  { background: var(--orange); border-color: var(--orange); }
.fg-day.on .fg-day-dow,
.fg-day.on .fg-day-num,
.fg-day.on .fg-day-c { color: #0B0B0C; }

/* tally */
.fg-tally { font-size: 12.5px; color: var(--muted); margin: 14px 0 10px; display: flex; gap: 12px; flex-wrap: wrap; }
.fg-tally b { font-weight: 600; color: var(--ink); }
.fg-tally i { font-style: normal; }

/* time block cards */
.fg-blk {
  background: var(--surface); border: 1px solid var(--line);
  border-left: 4px solid var(--line); border-radius: 14px;
  padding: 12px 13px; margin-bottom: 9px;
}
.fg-blk.preferred { border-left-color: var(--orange);  }
.fg-blk.np        { border-left-color: var(--np-line); }
.fg-blk.reserved  { border-left-color: var(--res-bd);  }
.fg-blk-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.fg-blk-time { font-weight: 700; font-size: 21px; display: flex; align-items: center; gap: 8px; }
.fg-blk-ic { width: 26px; height: 26px; border-radius: 7px; display: grid; place-items: center; }
.fg-blk.preferred .fg-blk-ic { background: var(--orange);   color: #0B0B0C; }
.fg-blk.np        .fg-blk-ic { background: var(--surface2); color: var(--np);  border: 1px solid var(--np-line); }
.fg-blk.reserved  .fg-blk-ic { background: var(--surface2); color: var(--res); border: 1px solid var(--res-bd);  }
.fg-rm { background: none; border: none; color: var(--muted); cursor: pointer; padding: 5px; border-radius: 8px; }
.fg-rm:hover { background: var(--surface2); color: var(--ink); }

/* tier segmented control */
.fg-seg {
  display: flex; gap: 4px;
  background: var(--surface2); border: 1px solid var(--line);
  border-radius: 11px; padding: 4px;
}
.fg-seg button {
  flex: 1; font-family: 'Inter'; font-weight: 600; font-size: 12.5px;
  border: none; background: transparent; color: var(--muted);
  padding: 9px 6px; border-radius: 8px; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 5px;
  transition: background .12s, color .12s;
}
.fg-seg button:hover        { color: var(--ink); }
.fg-seg button.on.preferred { background: var(--orange); color: #0B0B0C; }
.fg-seg button.on.np        { background: rgba(255, 255, 255, .15); color: var(--ink); }
.fg-seg button.on.reserved  { background: var(--res); color: var(--ink); }

/* add time */
.fg-add {
  width: 100%; border: 1.5px dashed var(--line); background: transparent;
  color: var(--muted); font-family: 'Inter'; font-weight: 600; font-size: 14px;
  border-radius: 13px; padding: 13px; cursor: pointer;
  display: flex; align-items: center; justify-content: center; gap: 7px;
  margin-top: 4px; transition: border-color .12s, color .12s;
}
.fg-add:hover { border-color: var(--orange); color: var(--orange); }
.fg-palette { background: var(--surface); border: 1px solid var(--line); border-radius: 14px; padding: 14px; margin-top: 4px; }
.fg-palette-h {
  font-size: 12px; font-weight: 600; color: var(--muted); margin-bottom: 10px;
  display: flex; justify-content: space-between; align-items: center;
}
.fg-palette-h button { background: none; border: none; color: var(--muted); cursor: pointer; font-size: 12px; font-weight: 600; }
.fg-palette-h button:hover { color: var(--ink); }
.fg-times { display: flex; flex-wrap: wrap; gap: 7px; }
.fg-tchip {
  font-weight: 700; font-size: 14px;
  background: var(--surface2); border: 1px solid var(--line);
  color: var(--muted); border-radius: 9px; padding: 7px 11px;
  cursor: pointer; transition: background .12s, border-color .12s, color .12s;
}
.fg-tchip:hover { background: var(--orange); border-color: var(--orange); color: #0B0B0C; }
.fg-empty { text-align: center; color: var(--muted); font-size: 13.5px; padding: 18px 0 8px; }

/* save bar — static so iframe auto-resizes correctly */
.fg-save {
  background: rgba(11, 11, 12, .92);
  border-top: 1px solid var(--line);
  padding: 12px 14px;
  margin-top: 24px;
}
.fg-save-in { max-width: 560px; margin: 0 auto; display: flex; align-items: center; gap: 12px; }
.fg-save-t  { flex: 1; font-size: 12.5px; color: var(--muted); }
.fg-btn {
  font-family: 'Inter'; font-weight: 600; font-size: 14.5px;
  border-radius: 12px; padding: 12px 20px; border: none;
  background: var(--orange); color: #0B0B0C; cursor: pointer;
  display: inline-flex; align-items: center; gap: 7px;
  transition: filter .12s;
}
.fg-btn:hover:not(:disabled) { filter: brightness(1.06); }
.fg-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.fg :focus-visible { outline: 2px solid var(--ring); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) { .fg * { transition: none !important; } }
`;

const DOW      = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS   = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MONTHS_S = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const PRESETS  = [
  "6:00 AM","6:30 AM","7:00 AM","7:30 AM","8:00 AM","8:30 AM",
  "9:00 AM","9:30 AM","10:00 AM","11:00 AM","12:00 PM",
  "1:00 PM","2:00 PM","4:00 PM","4:30 PM","5:00 PM",
  "5:30 PM","6:00 PM","6:30 PM","7:00 PM",
];
const TIERS = [
  { key: "preferred", label: "Preferred", icon: Flame,  dot: "#F5841F" },
  { key: "np",        label: "Non-pref",  icon: Clock3, dot: "#FFFFFF" },
  { key: "reserved",  label: "Reserved",  icon: Lock,   dot: "#6A665F" },
];
const TMAP = Object.fromEntries(TIERS.map(t => [t.key, t]));

function toMin(t) {
  const m = t.match(/(\d+):(\d+)\s*(AM|PM)/);
  let h = (+m[1]) % 12;
  if (m[3] === "PM") h += 12;
  return h * 60 + (+m[2]);
}

let uid = 100;
function emptyWeek() {
  return { Mon: [], Tue: [], Wed: [], Thu: [], Fri: [], Sat: [] };
}
function seed() {
  const mk = (time, tier) => ({ id: ++uid, time, tier });
  return {
    Mon: [mk("6:00 AM","preferred"), mk("9:30 AM","np"),  mk("5:30 PM","preferred"), mk("7:00 AM","reserved")],
    Tue: [mk("6:30 AM","preferred"), mk("1:00 PM","np"),  mk("5:00 PM","preferred")],
    Wed: [mk("7:30 AM","preferred"), mk("10:00 AM","np"), mk("6:00 PM","preferred")],
    Thu: [mk("6:30 AM","preferred"), mk("9:00 AM","np"),  mk("5:30 PM","preferred")],
    Fri: [mk("6:00 AM","preferred"), mk("4:30 PM","np")],
    Sat: [mk("7:00 AM","preferred"), mk("8:30 AM","preferred")],
  };
}

export default function AvailabilityEditor({ livePrefs = null, loading = false, onAction, saving = false }) {
  const [week, setWeek]             = useState(seed);
  const [day, setDay]               = useState("Mon");
  const [adding, setAdding]         = useState(false);
  const [weekOffset, setWeekOffset] = useState(0);

  // Populate from live collection data when it arrives
  useEffect(() => {
    if (livePrefs === null) return;
    const w = emptyWeek();
    livePrefs.forEach(p => {
      if (!w[p.dayOfWeek]) return;
      // collection stores 'open'; component uses 'np'
      w[p.dayOfWeek].push({ id: ++uid, time: p.time, tier: p.tier === 'open' ? 'np' : p.tier });
    });
    setWeek(w);
  }, [livePrefs]);

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
    if (first.month === last.month) return `${MONTHS[first.month]} ${first.year}`;
    return `${MONTHS_S[first.month]} - ${MONTHS_S[last.month]} ${last.year}`;
  }, [weekDates]);

  const blocks = useMemo(
    () => [...week[day]].sort((a, b) => toMin(a.time) - toMin(b.time)),
    [week, day]
  );

  const tally = useMemo(() => {
    const c = { preferred: 0, np: 0, reserved: 0 };
    week[day].forEach(b => c[b.tier]++);
    return c;
  }, [week, day]);

  const used = new Set(week[day].map(b => b.time));
  const openSlots = PRESETS.filter(t => !used.has(t));

  function setTier(id, tier) {
    setWeek(w => ({ ...w, [day]: w[day].map(b => b.id === id ? { ...b, tier } : b) }));
  }

  function remove(id) {
    setWeek(w => ({ ...w, [day]: w[day].filter(b => b.id !== id) }));
  }

  function add(time) {
    setWeek(w => ({ ...w, [day]: [...w[day], { id: ++uid, time, tier: "preferred" }] }));
    setAdding(false);
  }

  function handleSave() {
    const items = [];
    Object.entries(week).forEach(([dow, slots]) => {
      slots.forEach(s => {
        // component 'np' → collection 'open'
        items.push({ dayOfWeek: dow, time: s.time, tier: s.tier === 'np' ? 'open' : s.tier });
      });
    });
    onAction?.({ type: 'savePrefs', items });
  }

  return (
    <div className="fg">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Inter:wght@400;500;600;700&display=swap');`}</style>
      <style>{STYLES}</style>

      <div className="fg-wrap">
        <h1 className="fg-h1">Set your availability</h1>
        <p className="fg-sub">
          Add the times you'll take clients, then tag each one. Preferred times get
          highlighted to clients; reserved times are held and can't be booked.
        </p>

        <div className="fg-legend">
          {TIERS.map(t => (
            <span className="fg-key" key={t.key}>
              <span className="fg-dot" style={{ background: t.dot }} />
              {t.key === "preferred" && "Preferred — recommended"}
              {t.key === "np"        && "Non-preferred — available"}
              {t.key === "reserved"  && "Reserved — held"}
            </span>
          ))}
        </div>

        <div className="fg-week-hd">
          <div className="fg-week-month">{monthLabel}</div>
          <div className="fg-week-div" />
          <div className="fg-week-nav">
            <button className="fg-week-arr" onClick={() => setWeekOffset(o => o - 1)} aria-label="Previous week">
              <ChevronLeft size={18} />
            </button>
            <div className="fg-days">
              {DOW.map(d => (
                <div
                  key={d}
                  className={`fg-day${d === day ? " on" : ""}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => { setDay(d); setAdding(false); }}
                  onKeyDown={e => e.key === "Enter" && setDay(d)}
                >
                  <div className="fg-day-dow">{d}</div>
                  <div className="fg-day-num">{weekDates[d].num}</div>
                  <div className="fg-day-c">{week[d].length} slot{week[d].length !== 1 ? "s" : ""}</div>
                </div>
              ))}
            </div>
            <button className="fg-week-arr" onClick={() => setWeekOffset(o => o + 1)} aria-label="Next week">
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="fg-week-div" style={{ marginTop: 14 }} />
        </div>

        <div className="fg-tally">
          <span><i style={{ color: "#F5841F" }}>●</i> <b>{tally.preferred}</b> preferred</span>
          <span><i style={{ color: "#FFFFFF" }}>●</i> <b>{tally.np}</b> non-pref</span>
          <span><i style={{ color: "#6A665F" }}>●</i> <b>{tally.reserved}</b> reserved</span>
        </div>

        {loading ? (
          <div className="fg-empty" style={{ padding: '40px 0' }}>Loading your schedule…</div>
        ) : (
          <>
            {blocks.length === 0 && !adding && (
              <div className="fg-empty">No times set for {day} yet. Add one below.</div>
            )}

            {blocks.map(b => {
              const Icon = TMAP[b.tier].icon;
              return (
                <div key={b.id} className={`fg-blk ${b.tier}`}>
                  <div className="fg-blk-top">
                    <span className="fg-blk-time">
                      <span className="fg-blk-ic"><Icon size={15} /></span>
                      {b.time}
                    </span>
                    <button className="fg-rm" onClick={() => remove(b.id)} aria-label="Remove time">
                      <X size={18} />
                    </button>
                  </div>
                  <div className="fg-seg" role="group" aria-label="Tier">
                    {TIERS.map(t => {
                      const TI = t.icon;
                      const on = b.tier === t.key;
                      return (
                        <button key={t.key} className={`${on ? "on" : ""} ${t.key}`} onClick={() => setTier(b.id, t.key)}>
                          <TI size={13} /> {t.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {adding ? (
              <div className="fg-palette">
                <div className="fg-palette-h">
                  <span>Pick a time to add</span>
                  <button onClick={() => setAdding(false)}>Cancel</button>
                </div>
                {openSlots.length === 0 ? (
                  <div className="fg-empty" style={{ padding: "4px 0" }}>
                    Every preset time is already added for {day}.
                  </div>
                ) : (
                  <div className="fg-times">
                    {openSlots.map(t => (
                      <button key={t} className="fg-tchip" onClick={() => add(t)}>{t}</button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button className="fg-add" onClick={() => setAdding(true)}>
                <Plus size={17} /> Add a time
              </button>
            )}
          </>
        )}
      </div>

      <div className="fg-save">
        <div className="fg-save-in">
          <span className="fg-save-t">Changes apply to all weeks — clients see preferred times highlighted</span>
          <button className="fg-btn" disabled={saving} onClick={handleSave}>
            <Check size={16} /> {saving ? 'Saving…' : 'Save week'}
          </button>
        </div>
      </div>
    </div>
  );
}
