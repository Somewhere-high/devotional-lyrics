
/* =========================
   GLOBAL ELDER MODE
========================= */

(function () {
  const ELDER_KEY = "elder-mode";

  function isElder() {
    return localStorage.getItem(ELDER_KEY) === "yes";
  }

  function applyElderMode() {
    document.body.classList.add("elder-mode");

    // Tamil-only labels (if elements exist)
    const map = {
      "theme-toggle": "🌙 இரவு",
      "auto-scroll-btn": "📜 தானாக வாசிப்பு",
      "copy-btn": "📋 நகல்",
      "download-btn": "⬇ சேமி",
      "focus-btn": "🧘 பக்தி முறை"
    };

    Object.keys(map).forEach(id => {
      const el = document.getElementById(id);
      if (el) el.innerText = map[id];
    });
  }

  function applyNormalMode() {
    document.body.classList.remove("elder-mode");
  }

  // Apply on page load
  document.addEventListener("DOMContentLoaded", () => {
    if (isElder()) {
      applyElderMode();
    } else {
      applyNormalMode();
    }
  });

  // Expose toggle for index page
  window.toggleElderMode = function () {
    const enabled = isElder();
    localStorage.setItem(ELDER_KEY, enabled ? "no" : "yes");

    if (enabled) {
      applyNormalMode();
    } else {
      applyElderMode();
    }
  };
})();
