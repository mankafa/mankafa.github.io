
document.addEventListener("DOMContentLoaded", function () {
  // Highlight active nav link
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPage = location.pathname.split("/").pop();
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href && href.includes(currentPage)) {
      link.classList.add("active");
    }
  });

  // Theme toggle with transition
  const toggle = document.getElementById("themeToggle");
  function setTheme(dark) {
    document.body.classList.toggle("bg-dark", dark);
    document.body.classList.toggle("text-light", dark);
    document.body.classList.toggle("transition", true);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = document.body.classList.contains("bg-dark");
      setTheme(!isDark);
    });
  }
  const prefersDark = localStorage.getItem("theme") === "dark";
  setTheme(prefersDark);
});
