# Swing Happens Piano Funnel (mock)

Click-through of the **Swing Happens Piano Challenge**. No real Brevo, no real calendar booking.

Live: https://swing-happens-piano-funnel.vercel.app

Real leads go through the live-test repo instead: `swing-happens-piano-live`.

## Pages

| File | Role |
|---|---|
| `index.html` | 11-step Piano qualification form |
| `oto.html` | Bonus-bundle OTO (after form complete) |
| `workshop.html` | Post-booking screen (workshop video + PDF) |
| `bundle-over.html` | Countdown expired |
| `privacy.html` | Short privacy note |

## Local preview

```bash
python3 -m http.server 4173
```

- Form: http://localhost:4173/
- OTO: http://localhost:4173/oto.html
- Workshop: http://localhost:4173/workshop.html

UTM test: `http://localhost:4173/?campaign_name=test&adset_name=a&ad_name=b&traffic_source=meta`

## Flow

```
Ad → index.html (form) → oto.html (bundle) → workshop.html
```

OTO “Secure my bundle & call” skips Easy!Appointments and opens the after-booking workshop page.

`webhookUrl` stays empty. Form data stays in `sessionStorage` only.
