const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// Year
const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = $(".nav__toggle");
const navMenu = $(".nav__menu");
if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when clicking a link
  $$(".nav__menu a", navMenu).forEach((a) => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Simple demo contact form (no backend)
const form = $("#contactForm");
const hint = $("#formHint");
if (form && hint) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#name", form)?.value?.trim() || "bạn";
    hint.textContent = `Cảm ơn ${name}! (Demo) Mình sẽ kết nối qua email sau.`;
    form.reset();
  });
}

