var botao = document.querySelector("#buscar-pacientes");

botao.addEventListener("click",function(){
    //AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load",function(){
        if(xhr.status === 200){
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            document.querySelector("#erro-ajax").classList.remove("invisivel");
        }
        });
    xhr.send();
});