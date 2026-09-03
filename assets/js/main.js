const root = document.documentElement;
const theme = document.getElementById("theme");
root.dataset.theme =
  localStorage.getItem("wahyu-theme") ||
  (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
theme?.addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("wahyu-theme", root.dataset.theme);
});
document.getElementById("year")?.append(new Date().getFullYear());
const menu = document.getElementById("menu"),
  mobile = document.getElementById("mobileNav");
menu?.addEventListener("click", () => mobile.classList.toggle("open"));
mobile
  ?.querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => mobile.classList.remove("open")),
  );

// Smooth hero card layering: delay the z-index swap, then fade the hovered card into the foreground.
const heroVisual = document.querySelector(".hero-visual");
const heroCards = heroVisual?.querySelectorAll(".system-card, .code-card");
let heroHoverTimer;

heroCards?.forEach((card) => {
  card.addEventListener("pointerenter", () => {
    clearTimeout(heroHoverTimer);
    heroCards.forEach((other) => {
      if (other !== card) {
        other.classList.remove("is-front", "is-switching");
      }
    });

    card.classList.add("is-switching");
    heroHoverTimer = setTimeout(() => {
      card.classList.remove("is-switching");
      card.classList.add("is-front");
    }, 140);
  });

  card.addEventListener("pointerleave", () => {
    clearTimeout(heroHoverTimer);
    card.classList.remove("is-switching", "is-front");
  });
});
