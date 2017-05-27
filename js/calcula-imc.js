var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var tdPeso = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = pacientes[i].querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        console.log("Peso Inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso Inválido!";
        // pacientes[i].style.backgroundColor = "red";
        pacientes[i].classList.add("paciente-invalido");
    }

    if (!alturaValida) {
        console.log("Altura Inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura Inválida!";
        // pacientes[i].style.backgroundColor = "lightCoral";
        pacientes[i].classList.add("paciente-invalido");
    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
};

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }
    else {
        return false;
    }
};

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0) {
        return true;
    }
    else {
        return false;
    }
}



