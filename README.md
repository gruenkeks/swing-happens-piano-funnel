# Swing Happens Piano Funnel

Static funnel for the **Swing Happens Piano Challenge**: qualification form + one-time-offer page, adapted from Frank Herzberg’s bass funnel.

Live bass references:

- Form: https://forms.fillout.com/t/3wwAWmLZKkus
- OTO: https://frankherzberg.com/filloutwait/

## Pages

| File | Role |
|---|---|
| `index.html` | 11-step Piano qualification form |
| `oto.html` | Bonus-bundle OTO (after form complete) |
| `bundle-over.html` | Countdown expired |
| `privacy.html` | Short privacy note |

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 4173
```

Then:

- Form: http://localhost:4173/
- OTO: http://localhost:4173/oto.html

UTM test: `http://localhost:4173/?campaign_name=test&adset_name=a&ad_name=b&traffic_source=meta`

## Flow

```
Ad → index.html (form) → oto.html (bundle + call) → Brevo calendar
```

Score `>= 24` is treated as VIP. Score `24` is included (the live bass Fillout currently drops exact-24).

The form stores the lead in `sessionStorage` and can POST to `webhookUrl` in `js/config.js` once n8n/Brevo is wired. No data is sent until that URL is set.

## Still to confirm

- Piano coach calendar (currently Frank’s Swing Happens Brevo meeting)
- Meta Pixel ID / CAPI in `js/config.js`
- Piano-specific Brevo lists
- Whether LEAKS / Module 1 stay the Piano bonuses

Booking, pixel, and webhook are switched in `js/config.js` only.
