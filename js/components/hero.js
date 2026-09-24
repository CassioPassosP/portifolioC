const tools = [
  ["HTML", "html.png"], ["CSS", "css.png"], ["JavaScript", "javascript.png"],
  ["React", "react.png"], ["Java", "java.png"], ["Spring", "spring.png"],
  ["Node.js", "nodejs.png"], ["PostgreSQL", "postgresql.png"], ["Git", "git.png"]
];

export function renderHero() {
  const icons = tools.map(([name, file]) => `<li class="li-tools"><img alt="${name}" src="assets/images/${file}" /></li>`).join("");
  return `<section class="container-me" aria-labelledby="welcome-title">
    <div class="welcome-text-and-tools">
      <h1 id="welcome-title">Seja bem vindo!</h1>
      <p id="welcome-text">Ola me chamo <span id="namePage">Cassio Passos</span>, Desenvolvedor Full Stack em evolução.</p>
      <h2 id="tools-title">Ferramentas que utilizo:</h2>
      <div class="tools-used-div"><ul id="tools-icons">${icons}</ul></div>
    </div>
    <div id="author-img"><img alt="Cassio Passos" src="assets/images/euPort.png" /></div>
  </section>`;
}
