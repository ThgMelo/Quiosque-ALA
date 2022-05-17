document.addEventListener("keydown", function(event){
    if(event.keyCode == 120){
        abrir_sai();
    }

    if(event.keyCode == 121){
        abrir_ala();
    }
})

function abrir_sai(){
    alert("ABRIR SAI");
}

function abrir_ala(){
    alert("ABRIR ALA");
}