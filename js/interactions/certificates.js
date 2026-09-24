export function initializeCertificates() {
  const certificateList = document.querySelector(".certificate-list");
  const certificateToggle = document.querySelector(".certificates-toggle");
  if (!certificateList || !certificateToggle) return;

  certificateToggle.addEventListener("click", () => {
    const expanded = certificateList.classList.toggle("is-expanded");
    certificateToggle.setAttribute("aria-expanded", String(expanded));
    certificateToggle.textContent = expanded ? "Ocultar certificados" : "Ver mais certificados";
  });
}
