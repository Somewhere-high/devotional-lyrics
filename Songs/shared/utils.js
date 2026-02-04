/* =========================
   UTILITY FUNCTIONS
========================= */

window.$ = (id) => document.getElementById(id);

window.once = (key, fn) => {
  if (!localStorage.getItem(key)) {
    fn();
    localStorage.setItem(key, "done");
  }
};
