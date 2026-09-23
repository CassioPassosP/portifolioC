const botao = document.getElementsByClassName("theme-switch__checkbox")[0];

const temaSalvo = localStorage.getItem("portfolio-theme");

if (temaSalvo === "light") {
    document.body.classList.add("light");
    botao.checked = true;
}

botao.onclick = () => {
    const temaClaro = document.body.classList.toggle("light");
    document.body.classList.toggle("dark", !temaClaro);
    localStorage.setItem("portfolio-theme", temaClaro ? "light" : "dark");
};

const listaCertificados = document.querySelector(".certificate-list");
const botaoCertificados = document.querySelector(".certificates-toggle");

botaoCertificados.onclick = () => {
    const listaExpandida = listaCertificados.classList.toggle("is-expanded");
    botaoCertificados.setAttribute("aria-expanded", String(listaExpandida));
    botaoCertificados.textContent = listaExpandida
        ? "Ocultar certificados"
        : "Ver mais certificados";
};

document.querySelectorAll(".mobile-nav nav a").forEach((link) => {
    link.addEventListener("click", () => {
        link.closest(".mobile-nav").removeAttribute("open");
    });
});