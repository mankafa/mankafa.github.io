
const langData = {
  de: {
    nav: ["Start", "Über mich", "Projekte", "Kontakt", "Download"],
    greeting: "Willkommen auf meiner professionellen Portfolio-Seite.",
    resumeBtn: "📄 Lebenslauf herunterladen"
  },
  en: {
    nav: ["Home", "About", "Projects", "Contact", "Download"],
    greeting: "Welcome to my professional portfolio site.",
    resumeBtn: "📄 Download CV"
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const langToggle = document.getElementById("langToggle");
  const lang = localStorage.getItem("lang") || "de";
  applyLang(lang);

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const newLang = localStorage.getItem("lang") === "de" ? "en" : "de";
      localStorage.setItem("lang", newLang);
      applyLang(newLang);
    });
  }
});

function applyLang(lang) {
  const navItems = document.querySelectorAll(".nav-link.lang");
  navItems.forEach((item, i) => item.textContent = langData[lang].nav[i]);
  const gText = document.getElementById("greetingText");
  if (gText) gText.textContent = langData[lang].greeting;
  const resumeBtn = document.getElementById("resumeBtn");
  if (resumeBtn) resumeBtn.textContent = langData[lang].resumeBtn;
}
