# letscalm.com

The LetsCalm company site: a static homepage (what the app does, privacy summary, beta download) and the privacy policy.

- `index.html` — homepage. The download section shows the right option for the visitor's device: iPhone/iPad get the TestFlight link, Android gets the Play Store listing (the app is in open testing), everything else gets TestFlight, the Google Play web opt-in page and the Play listing, plus a QR code. `?os=ios`, `?os=android` or `?os=all` forces a view for testing.
- `privacy.html` — privacy policy. Written from what the app actually does; update it if the app starts collecting anything new.
- `style.css` — shared styles.
- `analytics.js` — Google Analytics 4. Put the Measurement ID in the `ID` constant; it stays inert while the placeholder is there. Sends a `download_click` event with a `platform` parameter for every download button.

Hosted on GitHub Pages from `main` at https://letscalm.com (the `CNAME` file). The download links live in the `LINKS` object at the top of the script in `index.html`; when the app ships to the stores, replace the TestFlight link with the App Store URL and drop the Android web opt-in link once open testing ends. The QR code encodes `https://letscalm.com`.
