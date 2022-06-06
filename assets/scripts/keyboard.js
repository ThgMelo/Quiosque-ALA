document.addEventListener("keydown", function(event){

    if(event.keyCode == 118){
        event.preventDefault();
        abrir_sai();
    }

    if(event.keyCode == 120){
        event.preventDefault();
        abrir_ala();
    }

    if(event.keyCode == 27){
        event.preventDefault();
        fechaModalAberto()
    }

    if(event.keyCode == 112){
        event.preventDefault();
        document.querySelector("#modal-apontamento1").classList.add("visible");
    }

    if(event.keyCode == 113){
        event.preventDefault();
        document.querySelector("#modal-rmp").classList.add("visible");
    }

    if(event.keyCode == 114){
        event.preventDefault();
        document.querySelector("#modal-op").classList.add("visible");
    }

    if(event.keyCode == 116){
        event.preventDefault();
        document.querySelector("#modal-apontamento2").classList.add("visible");
    }

    if(event.keyCode == 117){
        event.preventDefault();
        document.querySelector("#modal-ferramentas").classList.add("visible");
    }

    if(event.keyCode == 119){
        event.preventDefault();
        document.querySelector("#modal-encerra-rmp").classList.add("visible");
    }

    if(event.keyCode == 121){
        event.preventDefault();
        document.querySelector("#modal-sm").classList.add("visible");
    }
})

function abrir_sai(){
    alert("ABRIR SAI");
}

function abrir_ala(){
    alert("ABRIR ALA");
}