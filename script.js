// Seletores
const form = document.querySelector("#form-post");
const tituloInput = document.querySelector("#titulo");
const conteudoInput = document.querySelector("#conteudo");

const tituloRenderizado = document.querySelector("#titulo-renderizado");
const conteudoRenderizado = document.querySelector("#conteudo-renderizado");

// Evento de envio
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const titulo = tituloInput.value;
    const conteudo = conteudoInput.value;

    // Renderiza na tela
    tituloRenderizado.textContent = titulo;
    conteudoRenderizado.textContent = conteudo;

    // Limpa o formulário
    form.reset();
});