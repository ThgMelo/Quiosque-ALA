const botoes = document.querySelectorAll("[data-abre-modal]");
for( let botaoEl of botoes){
    botaoEl.addEventListener("click", abreModal);
}

function abreModal(e){
    const botaoClicadoEl = e.currentTarget;
    const seletorDoModal = botaoClicadoEl.dataset.abreModal;
    const modalEl = document.querySelector(seletorDoModal);
    modalEl.classList.add("visible");
}

const botoesDeFechar = document.querySelectorAll(".fechar-modal");
botoesDeFechar.forEach(fechaEl => fechaEl.addEventListener("click", fechaModal));

function fechaModal(e){
    const fecharModalEl = e.currentTarget;
    const modalEl = fecharModalEl.closest(".modal");
    modalEl.classList.remove("visible");
}

const mascara = document.querySelector("#mascara");
mascara.addEventListener("click", fechaModalAberto);

function fechaModalAberto(){
    document.querySelector(".modal.visible").classList.remove("visible");
}