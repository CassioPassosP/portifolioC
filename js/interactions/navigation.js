export function initializeMobileNavigation() {
  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      link.closest(".mobile-nav")?.removeAttribute("open");
    });
  });
}
