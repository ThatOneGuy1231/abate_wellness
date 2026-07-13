# Abate Wellness — Booking Prototype

Front-end prototype of a custom booking + scheduling experience for Abate Wellness.
Three screens: client booking, trainer reschedule loop, trainer availability editor.
Mock data, in-memory state. See **CLAUDE.md** for full project context.

## Run it

Requires Node.js 18+ (20+ recommended).

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173). Use the tabs at the top to switch
between the three screens. On your phone, open the same URL on your home network (Vite is
set to host:true), or use `npm run build && npm run preview`.

## Structure

```
src/
  App.jsx                     # dev tab switcher (not part of the real site)
  components/
    BookingView.jsx           # client booking — branded
    AdminReschedule.jsx       # trainer reschedule loop  (needs reskin)
    AvailabilityEditor.jsx    # trainer availability      (needs reskin)
  assets/logo.png             # Abate Wellness wordmark
```
