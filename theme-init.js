// Apply the theme before first paint to avoid a dark/light flash.
(function () {
  try {
    var t = localStorage.getItem('stand_form_theme_v1');
    if (t !== 'light' && t !== 'dark') t = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {}
})();
