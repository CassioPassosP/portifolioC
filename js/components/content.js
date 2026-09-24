export function renderAbout() {
  return `<section class="about-me">
    <h1 id="about-me-title">Sobre mim</h1>
    <div class="about-me-container-card"><div class="about-me-card"><p id="about-me-text">
      Olá! Meu nome é Cassio Passos, tenho 24 anos, gosto de videogames, musica, e musculação. Sou estudante de Análise e Desenvolvimento de Sistemas na Universidade do Vale do Rio dos Sinos (Unisinos) e aluno da <a href="https://listao2026.geracaocaldeira.org/programacao-java">trilha Programacao Java</a> no programa <a href="https://www.geracaocaldeira.org/">Geração Caldeira 2026.</a> Sou apaixonado por tecnologia e desenvolvimento de software, sempre buscando aprender novas linguagens, ferramentas e boas práticas de programação. Tenho interesse em desenvolvimento backend, desenvolvimento web e criação de soluções que resolvam problemas reais. Este portfólio reúne alguns dos projetos que desenvolvi durante minha jornada acadêmica e também projetos pessoais, demonstrando minha evolução, dedicação e vontade de crescer como desenvolvedor. Meu objetivo é conquistar oportunidades na área de tecnologia, contribuir com equipes inovadoras e continuar evoluindo como profissional, sempre aprendendo novas tecnologias e enfrentando novos desafios.
    </p></div></div>
  </section>`;
}

export function renderExperience() {
  const items = [
    ["MAR 2025 - ABR 2026", "Payback Engenharia", "Técnico de Automação Industrial. Atuação com CLPs Rockwell, OMRON e Siemens, integração de robôs industriais e desenvolvimento de URCaps para robôs colaborativos usando Java e Java Swing.", ["Java", "Java Swing", "Robótica"]],
    ["ABR 2023 - MAR 2025", "Payback Engenharia", "Assistente Técnico em Automação, com suporte a projetos industriais, testes, diagnóstico de falhas e melhorias de processos automatizados.", ["CLPs", "Automação", "Testes"]],
    ["FEV 2022 - ABR 2023", "TDK Electronics", "Estágio em Manutenção Eletrônica, com suporte em manutenção preventiva e corretiva, diagnóstico de falhas e apoio técnico às rotinas da equipe industrial.", ["Eletrônica", "Manutenção"]]
  ];
  return `<section class="career-section" id="experience-title"><h1>Experiência profissional</h1><div class="career-grid">${items.map(([date, title, text, tags]) => `<article class="career-card"><span class="career-kicker">${date}</span><h2>${title}</h2><p>${text}</p><div class="career-tags">${tags.map(tag => `<span>${tag}</span>`).join("")}</div></article>`).join("")}</div></section>`;
}

export function renderEducation() {
  return `<section class="career-section" id="education-title"><h1>Graduação</h1><div class="career-grid career-grid-single">
    <article class="career-card"><span class="career-kicker">MAR 2023 - PRESENTE</span><h2>Análise e Desenvolvimento de Sistemas</h2><p>Universidade do Vale do Rio dos Sinos (Unisinos)</p><div class="career-status">EM ANDAMENTO</div></article>
    <article class="career-card"><span class="career-kicker">MAI 2019 - JAN 2023</span><h2>Técnico em Mecatrônica</h2><p>SENAI-RS</p><div class="career-tags"><span>Automação</span><span>Eletrônica</span></div></article>
    <article class="career-card"><span class="career-kicker">AGO 2026 - DEZ 2026</span><h2>Programação Java</h2><p>Geração Caldeira 2026</p><div class="career-tags"><span>Java</span><span>Backend</span></div></article>
    <article class="career-card career-card-accent"><span class="career-kicker">JUN 2026 - DEZ 2026</span><h2>Residência Full Stack 5.0</h2><p>Instituto ELDORADO em parceria com a Petrobras</p><a class="career-link" href="https://informativo.eldorado.org.br/residencia-full-stack" target="_blank" rel="noreferrer">Ver programa <span aria-hidden="true">↗</span></a></article>
  </div></section>`;
}
