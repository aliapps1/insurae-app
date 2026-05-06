# Insurae GitHub App

A GitHub Pages-ready PWA for **Insurae**, a UAE insurance connector app.

## What this app does

- Lists UAE insurance providers.
- Filters by Health Insurance and Car Insurance.
- Redirects users to official insurer websites.
- Adds tracking parameters:
  - `utm_source=insurae`
  - `utm_medium=referral`
  - `utm_campaign=insurance_marketplace`
  - `insurae_ref=INSURAE_DEMO_001`
- Saves click logs locally for MVP testing.
- Supports English, Arabic, and Persian UI.
- PWA-ready for later Android packaging.

## Important business note

This app does **not** prove completed sales by itself, because final purchase happens on the insurer website.

For real commission tracking, each insurer must provide one of these after contract:

1. Official affiliate link.
2. Monthly sales report by referral code.
3. Partner dashboard.
4. API / webhook confirmation.

## Deploy on GitHub Pages

1. Create a new GitHub repository, for example: `insurae-app`
2. Upload these files to the repository root.
3. Go to `Settings > Pages`.
4. Select `Deploy from a branch`.
5. Choose `main` branch and `/root`.
6. Open the GitHub Pages link.

## Later Android conversion

After testing on GitHub Pages:
- Use Capacitor to convert to Android.
- Add Play Store assets.
- Replace demo links with official partner tracking links.
