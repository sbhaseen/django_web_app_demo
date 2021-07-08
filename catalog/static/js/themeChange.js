const themeToggleButton = document.getElementById("toggleTheme");
const bodySelector = document.querySelector("body");
const navSelector = document.querySelector("nav");

const THEME_STATE = {
  light: "light",
  dark: "dark",
};

let currentTheme = THEME_STATE.light;

window.onload = function () {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    currentTheme = THEME_STATE.dark;
  }

  if (!localStorage.getItem("themeSettings")) {
    localStorage.setItem("themeSettings", currentTheme);
    updateTheme();
  } else {
    currentTheme = localStorage.getItem("themeSettings");
    updateTheme();
  }
};

if (themeToggleButton && navSelector) {
  themeToggleButton.addEventListener("click", toggleThemeSetting);

  function toggleThemeSetting() {
    setTheme();
    updateTheme();
  }

  function updateTheme() {
    toggleBody();
    toggleNav();
  }

  function setTheme() {
    if (currentTheme == THEME_STATE.light) {
      currentTheme = THEME_STATE.dark;
      localStorage.setItem("themeSettings", currentTheme);
    } else {
      currentTheme = THEME_STATE.light;
      localStorage.setItem("themeSettings", currentTheme);
    }
  }

  function toggleBody() {
    if (currentTheme === THEME_STATE.light) {
      bodySelector.classList.remove("dark");
    } else {
      bodySelector.classList.add("dark");
    }
  }

  function toggleNav() {
    if (currentTheme === THEME_STATE.light) {
      navSelector.classList.remove("navbar-dark", "bg-dark");
      navSelector.classList.add("navbar-light", "bg-light");
    } else {
      navSelector.classList.remove("navbar-light", "bg-light");
      navSelector.classList.add("navbar-dark", "bg-dark");
    }
  }
}
