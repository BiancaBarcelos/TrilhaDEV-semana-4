/*Questão 1*/

function calcularConta(event) {


    event.preventDefault();
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let operadoresMatematicos = document.getElementById("operadoresMatematicos").value;
    
    if (numero1 !== "" && numero2 !== ""){

        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);

        if (operadoresMatematicos === "adicao") {
            valor = numero1 + numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} + ${numero2} é ${valor}`
        }else if (operadoresMatematicos === "subtracao") {
            valor = numero1 - numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} - ${numero2} é ${valor}`
        }else if (operadoresMatematicos === "divisao") {
            valor = numero1 / numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} / ${numero2} é ${valor}`

        }else if (operadoresMatematicos === "multiplicacao") {
            valor = numero1 * numero2;
            document.getElementById("frase").innerHTML = `O resultado da operação ${numero1} * ${numero2} é ${valor}`
        }
    }else {
        alert("Preencha todos os campos indicados!");
    }
}