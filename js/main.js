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