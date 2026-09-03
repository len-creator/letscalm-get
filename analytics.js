// Google Analytics 4. Set the Measurement ID here (Google Analytics -> Admin ->
// Data Streams -> letscalm.com). Nothing loads while it is left as a placeholder.
(function () {
  var ID = 'G-XXXXXXXXXX';
  if (!/^G-[A-Z0-9]{6,}$/.test(ID) || /^G-X+$/.test(ID)) return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', ID, { anonymize_ip: true });

  // Count taps on the download buttons by platform, which is the one number
  // this site exists to move.
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a.btn');
    if (!a || !a.id) return;
    var platform = /^ios/.test(a.id) ? 'ios' : /^android-group/.test(a.id) ? 'android_group'
      : /^android-optin/.test(a.id) ? 'android_optin' : a.id === 'hero-btn' ? 'hero' : 'other';
    gtag('event', 'download_click', { platform: platform });
  });
})();
