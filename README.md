# letscalm.com

One static page that sends visitors to the right LetsCalm download for their device:

- iPhone / iPad → TestFlight public link (auto-redirect, with a fallback button)
- Android → the two Google Play closed-testing steps (join the testers Google Group, then opt in)
- Everything else → both options plus a QR code that opens this page on a phone

Hosted on GitHub Pages from `main`. `?os=ios`, `?os=android` or `?os=all` forces a view for testing.

The links live in the `LINKS` object at the top of the script in `index.html`. When the app ships to the stores, replace the TestFlight link with the App Store URL and collapse the two Android steps into the Play Store URL.

The QR code encodes `https://letscalm.com`; regenerate it if the domain ever changes.
