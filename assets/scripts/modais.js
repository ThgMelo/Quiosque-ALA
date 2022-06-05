const botaoEl = document.querySelector("button");
botaoEl.addEventListener("click", abreModal);

function abreModal(e){
    const modalEl = document.querySelector(".modal");
    modalEl.classList.add("visible");
}

const botoesDeFechar = document.querySelectorAll(".fechar-modal");
botoesDeFechar.forEach(fechaEl => fechaEl.addEventListener("click", fechaModal));

const mascara = document.querySelector("#mascara");
mascara.addEventListener("click", fechaModal);

function fechaModal(e){
    const modalEl = document.querySelector(".modal");
    modalEl.classList.remove("visible");
}