let langData = {};

fetch("../data/lang.json")
  .then(res => res.json())
  .then(data => {
    langData = data;

    const lang = localStorage.getItem("lang") || "de";
    applyLang(lang);

    const toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const newLang = localStorage.getItem("lang") === "de" ? "en" : "de";
        localStorage.setItem("lang", newLang);
        applyLang(newLang);
      });
    }
  });

function applyLang(lang) {
  const navItems = document.querySelectorAll(".nav-link.lang");
  navItems.forEach((item, i) => {
    if (langData[lang] && langData[lang].nav[i]) {
      item.textContent = langData[lang].nav[i];
    }
  });

  const gText = document.getElementById("greetingText");
  if (gText && langData[lang].greeting) gText.textContent = langData[lang].greeting;

  const resumeBtn = document.getElementById("resumeBtn");
  if (resumeBtn && langData[lang].resumeBtn) resumeBtn.textContent = langData[lang].resumeBtn;
}
