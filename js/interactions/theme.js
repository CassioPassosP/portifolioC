export function initializeTheme() {
  const themeToggle = document.querySelector(".theme-switch__checkbox");
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem("portfolio-theme");
  const isLight = savedTheme === "light";
  document.body.classList.toggle("light", isLight);
  document.body.classList.toggle("dark", !isLight);
  themeToggle.checked = isLight;

  themeToggle.addEventListener("change", () => {
    const nextIsLight = themeToggle.checked;
    document.body.classList.toggle("light", nextIsLight);
    document.body.classList.toggle("dark", !nextIsLight);
    localStorage.setItem("portfolio-theme", nextIsLight ? "light" : "dark");
  });
}
