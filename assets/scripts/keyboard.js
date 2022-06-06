document.addEventListener("keydown", function(event){
    if(event.keyCode != 122){
        event.preventDefault();
    }
    
    if(event.keyCode == 120){
        abrir_sai();
    }

    if(event.keyCode == 121){
        abrir_ala();
    }

    if(event.keyCode == 27){
        fechaModalAberto()
    }

    if(event.keyCode == 112){
        document.querySelector("#modal-apontamento1").classList.add("visible");
    }

    if(event.keyCode == 113){
        document.querySelector("#modal-rmp").classList.add("visible");
    }
})

function abrir_sai(){
    alert("ABRIR SAI");
}

function abrir_ala(){
    alert("ABRIR ALA");
}