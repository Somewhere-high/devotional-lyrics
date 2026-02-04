/* =========================
   GLOBAL THEME
========================= */

(function () {
  const KEY = "devotional-theme";

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  const saved = localStorage.getItem(KEY);
  applyTheme(saved);

  window.toggleTheme = function () {
    const isDark = document.documentElement.hasAttribute("data-theme");
    const next = isDark ? "light" : "dark";
    localStorage.setItem(KEY, next);
    applyTheme(next);
  };
})();
