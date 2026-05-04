/**
 * Practice Dashboard – minimal interactivity
 *
 * - Toggles dark mode and persists the preference in localStorage.
 * - Wires the header checkbox so it selects/deselects every row.
 */
(function () {
  "use strict";

  const STORAGE_KEY = "practiceDashboard.darkMode";

  const body = document.body;
  const toggle = document.getElementById("darkModeToggle");
  const headerCheckbox = document.querySelector(".practice-table thead .form-check-input");
  const rowCheckboxes = document.querySelectorAll(".practice-table tbody .form-check-input");

  function applyDarkMode(enabled) {
    body.classList.toggle("dark-mode", enabled);
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(enabled));
      const label = toggle.querySelector("span");
      if (label) {
        label.textContent = enabled ? "Disable Dark Mode" : "Enable Dark Mode";
      }
    }
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "true") {
    applyDarkMode(true);
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      const next = !body.classList.contains("dark-mode");
      applyDarkMode(next);
      localStorage.setItem(STORAGE_KEY, String(next));
    });
  }

  if (headerCheckbox) {
    headerCheckbox.addEventListener("change", function (event) {
      rowCheckboxes.forEach(function (checkbox) {
        checkbox.checked = event.target.checked;
      });
    });
  }

  rowCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      if (!headerCheckbox) return;
      const all = Array.from(rowCheckboxes).every(function (cb) { return cb.checked; });
      const none = Array.from(rowCheckboxes).every(function (cb) { return !cb.checked; });
      headerCheckbox.checked = all;
      headerCheckbox.indeterminate = !all && !none;
    });
  });
})();
