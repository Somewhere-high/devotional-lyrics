/* =========================
   GLOBAL ELDER MODE
========================= */

(function () {
  const KEY = "elder-mode";

  function isElder() {
    return localStorage.getItem(KEY) === "yes";
  }

  function applyElder() {
    document.body.classList.add("elder-mode");

    const tamilLabels = {
      "copy-btn": "📋 நகல்",
      "download-btn": "⬇ சேமி",
      "auto-scroll-btn": "📜 தானாக வாசிப்பு",
      "focus-btn": "🧘 பக்தி முறை"
    };

    Object.entries(tamilLabels).forEach(([id, label]) => {
      const el = document.getElementById(id);
      if (el) el.innerText = label;
    });
  }

  function applyNormal() {
    document.body.classList.remove("elder-mode");
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (isElder()) applyElder();
    else applyNormal();
  });

  // Expose toggle globally
  window.toggleElderMode = function () {
    const enabled = isElder();
    localStorage.setItem(KEY, enabled ? "no" : "yes");
    enabled ? applyNormal() : applyElder();
  };
})();
