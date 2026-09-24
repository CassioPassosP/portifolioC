export function renderHeader() {
  return `
    <header class="toolbar-main">
      <h1 class="namePage">Cassio Passos</h1>
      <nav class="toolbar-main-list" aria-label="Navegação principal">
        <ul class="sub-shortcut">
          <li><a href="#about-me-title">Sobre mim</a></li>
          <li><a href="#project-title">Projetos</a></li>
          <li><a href="#experience-title">Experiência</a></li>
          <li><a href="#education-title">Formação</a></li>
          <li><a href="#contact-title">Contato</a></li>
        </ul>
      </nav>
      <div id="btn-dark-mode">
        <label class="theme-switch">
          <input class="theme-switch__checkbox" type="checkbox" aria-label="Alternar tema" />
          <span class="theme-switch__container"><span class="theme-switch__circle-container"></span></span>
        </label>
      </div>
    </header>`;
}
