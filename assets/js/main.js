const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");
const year = document.querySelector("#current-year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && primaryNav) {
  const setMenuState = (isOpen) => {
    document.body.classList.toggle("nav-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  };

  menuToggle.addEventListener("click", () => {
    setMenuState(!document.body.classList.contains("nav-open"));
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuState(false);
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuState(false);
    }
  });
}
