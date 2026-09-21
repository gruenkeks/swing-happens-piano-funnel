# Swing Happens Piano Funnel (mock)

Click-through of the **Swing Happens Piano Challenge**. No real Brevo, no real calendar booking.

Live: https://swing-happens-piano-funnel.vercel.app

Real leads go through the live-test repo instead: `swing-happens-piano-live`.

## Pages

| File | Role |
|---|---|
| `index.html` | 11-step Piano qualification form (Piano +5 / Keyboard +3 / Other 0, max 33, VIP `>= 25`) |
| `oto.html` | Bonus-bundle OTO (after form complete) |
| `booking.html` | Mock of the 3 EA questions, then workshop |
| `workshop.html` | Post-booking screen (workshop video + PDF view) |
| `bundle-over.html` | Countdown expired |
| `privacy.html` | Short privacy note |

## Local preview

```bash
python3 -m http.server 4173
```

- Form: http://localhost:4173/
- OTO: http://localhost:4173/oto.html
- Booking questions: http://localhost:4173/booking.html
- Workshop: http://localhost:4173/workshop.html

Workshop video hides after **5 days** in this browser (`localStorage`). PDF stays. Force expired: `http://localhost:4173/workshop.html?expireNow=1`

UTM test: `http://localhost:4173/?campaign_name=test&adset_name=a&ad_name=b&traffic_source=meta`

## Flow

```
Ad → index.html (form) → oto.html (bundle) → booking.html (3 questions) → workshop.html
```

OTO “Secure my bundle & call” skips Easy!Appointments. Same three questions as live EA, then workshop.

`webhookUrl` stays empty. Form data stays in `sessionStorage` only.
