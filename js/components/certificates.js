const certificates = [
  ["c70d0da8-52c8-48fa-836f-b59fd66f06aa", "4H · MAI 2026", "Praticando Java: orientação a objetos"],
  ["a03e90c7-f9ae-4743-a6cb-de5f10d897f4", "4H · MAI 2026", "Praticando Java: variáveis e tipos"],
  ["e8fbf0bb-6bd4-434c-abc6-24f3687c068d", "10H · MAI 2026", "Java: aplicando a Orientação a Objetos"],
  ["ae9479e6-dc8a-4187-9b43-90480a79a25d", "10H · JUN 2026", "Java: consumindo API e lidando com erros"],
  ["4cc080c9-5e3b-4800-a676-771683d0e6da", "20H · JUN 2026", "Redes e Protocolos: fundamentos da web"],
  ["d378bde6-0364-4386-a623-3453c286c17a", "8H · MAI 2026", "Git e GitHub: compartilhando e colaborando"],
  ["7ebfd1b3-b052-4f61-b99d-9e590009be1c", "8H · MAI 2026", "Scrum: agilidade em seu projeto"],
  ["dc25765a-0033-4ac1-953c-f1a36eb1558f", "8H · JUN 2026", "Arquitetura de computadores"],
  ["296eef15-3111-4df5-8bff-3bc61b8f9c22", "4H · JUN 2026", "Praticando mapas mentais com IA"],
  ["e015a7da-76f5-42da-8e0f-20a0fc42b3f2", "6H · JUN 2026", "Aprendizagem com ChatGPT"],
  ["31e073f3-5596-4ac4-ab8d-a1b70e505dd5", "8H · MAI 2026", "Aprender a aprender"],
  ["1a7f1458-5bb6-440c-beab-08595d7fa063", "6H · JUN 2026", "Comunicação assertiva"],
  ["fd8600aa-2f04-41e6-80d5-e0b5aef51fc3", "10H · JUN 2026", "Desenvolvimento de carreira"],
  ["785b63f3-d1a5-4b51-b4cc-036ce9a37d40", "6H · MAI 2026", "Inteligência emocional"],
  ["2135f50c-07cf-4b8e-a2cf-b13a88a0b04c", "8H · JUN 2026", "Networking: expanda sua rede"],
  ["592341bb-24aa-428c-9ad8-8677e23ab7b6", "8H · MAI 2026", "Java: criando sua primeira aplicação"],
  ["43d599e3-acd3-4ef9-9b88-875310d91222", "8H · MAI 2026", "Java: listas e coleções de dados"],
  ["fa1edb05-1f7c-4d5f-b36d-ab62be8cdcec", "4H · MAI 2026", "Praticando Java: condicionais if e else"],
  ["eb7dd8a4-8cc9-49db-8888-ec350e3aee9b", "4H · MAI 2026", "Praticando Java: data e hora"],
  ["1315e1f9-5386-45d5-a714-21c339117a84", "4H · MAI 2026", "Praticando Java: laços for e while"],
  ["44ff6511-cad5-4e9f-98b0-08d2db88756a", "8H · MAI 2026", "Pensamento computacional e lógica"]
];

export function renderCertificates() {
  const cards = certificates.map(([id, meta, title]) => `<a class="certificate-card" href="https://cursos.alura.com.br/certificate/${id}" target="_blank" rel="noreferrer"><span class="career-kicker">ALURA · ${meta}</span><h2>${title}</h2><span class="certificate-link">Ver certificado ↗</span></a>`).join("");
  return `<section class="career-section" id="certificates-title"><h1>Certificados</h1><div class="certificate-list">${cards}
    <article class="certificate-card certificate-highlight"><span class="career-kicker">TIC EM TRILHAS · 30H · DEZ 2024</span><h2>Trilha Introdução a React.js</h2><p>Concluída em 31 de dezembro de 2024, pela instituição executora Venturus.</p></article>
    <article class="certificate-card certificate-highlight"><span class="career-kicker">TIC EM TRILHAS · 24H · MAI 2025</span><h2>Trilha de Versionamento de Código</h2><p>Concluída em 22 de maio de 2025, pela Pontifícia Universidade Católica do Rio Grande do Sul.</p></article>
  </div><button aria-expanded="false" class="certificates-toggle" type="button">Ver mais certificados</button></section>`;
}
