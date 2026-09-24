import { renderHeader } from "./components/header.js";
import { renderHero } from "./components/hero.js";
import { renderAbout, renderExperience, renderEducation } from "./components/content.js";
import { renderCertificates } from "./components/certificates.js";
import { renderProjects, renderContact } from "./components/projects.js";
import { renderFooter } from "./components/footer.js";
import { initializeTheme } from "./interactions/theme.js";
import { initializeCertificates } from "./interactions/certificates.js";
import { initializeMobileNavigation } from "./interactions/navigation.js";

const app = document.querySelector("#app");

if (app) {
  app.innerHTML = [
    renderHeader(),
    renderHero(),
    renderAbout(),
    renderExperience(),
    renderCertificates(),
    renderEducation(),
    renderProjects(),
    renderContact(),
    renderFooter()
  ].join("");

  initializeTheme();
  initializeCertificates();
  initializeMobileNavigation();
}
