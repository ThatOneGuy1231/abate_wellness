import React, { useEffect, useState, useCallback, useRef } from "react";
import BookingView from "./components/BookingView.jsx";
import AvailabilityEditor from "./components/AvailabilityEditor.jsx";

const IN_IFRAME = window.self !== window.top;

function getInitialMode() {
  if (!IN_IFRAME) {
    return new URLSearchParams(window.location.search).get("view") === "admin"
      ? "admin"
      : "client";
  }
  return null;
}

export default function App() {
  const [mode,        setMode]        = useState(getInitialMode);
  const [liveSlots,   setLiveSlots]   = useState(null);
  const [bookingIds,  setBookingIds]  = useState({});
  const [livePrefs,   setLivePrefs]   = useState(null);
  const [prefsLoaded, setPrefsLoaded] = useState(!IN_IFRAME);
  const [saving,      setSaving]      = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    let timer;
    const sendSize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const h = rootRef.current?.scrollHeight;
        if (h > 0) window.parent.postMessage({ type: "abate-resize", height: h + 40 }, "*");
      }, 50);
    };

    const ro = new ResizeObserver(sendSize);
    if (rootRef.current) ro.observe(rootRef.current);
    sendSize();

    const onMsg = (e) => {
      if (!e.data?.type) return;
      if (e.data.type === "abate-mode")        { setMode(e.data.mode); }
      if (e.data.type === "abate-data")        { setLiveSlots(e.data.slots ?? null); }
      if (e.data.type === "abate-booked")      { setBookingIds(ids => ({ ...ids, [e.data.slotId]: e.data.bookingId })); }
      if (e.data.type === "abate-prefs")       { setLivePrefs(e.data.prefs ?? []); setPrefsLoaded(true); }
      if (e.data.type === "abate-prefs-saved") { setSaving(false); }
      if (e.data.type === "abate-prefs-error") { setSaving(false); }
    };
    window.addEventListener("message", onMsg);
    return () => { clearTimeout(timer); ro.disconnect(); window.removeEventListener("message", onMsg); };
  }, []);

  const handleAction = useCallback((action) => {
    if (!IN_IFRAME) return;
    switch (action.type) {
      case "weekChange":
        window.parent.postMessage({ type: "abate-week", mondayISO: action.mondayISO }, "*");
        break;
      case "book":
        window.parent.postMessage({ type: "abate-book", slotId: action.slot.id, slotData: action.slot.slotData }, "*");
        break;
      case "waitlist":
        window.parent.postMessage({ type: "abate-waitlist", slotId: action.slot.id, slotData: action.slot.slotData }, "*");
        break;
      case "cancel":
        window.parent.postMessage({ type: "abate-cancel", slotId: action.slotId, bookingId: bookingIds[action.slotId] }, "*");
        break;
      case "leaveWaitlist":
        window.parent.postMessage({ type: "abate-leave-waitlist", slotId: action.slotId }, "*");
        break;
      case "savePrefs":
        setSaving(true);
        window.parent.postMessage({ type: "abate-save-prefs", items: action.items }, "*");
        break;
    }
  }, [bookingIds]);

  let content;
  if (mode === "admin") {
    content = (
      <AvailabilityEditor
        livePrefs={IN_IFRAME ? livePrefs : null}
        loading={IN_IFRAME && !prefsLoaded}
        onAction={handleAction}
        saving={saving}
      />
    );
  } else if (mode === "client") {
    content = <BookingView liveSlots={IN_IFRAME ? liveSlots : null} onAction={handleAction} />;
  } else {
    content = <div style={{ background: "#0B0B0C", minHeight: "600px" }} />;
  }

  return <div ref={rootRef}>{content}</div>;
}
