const campoValor = document.getElementById("valor")
const campoMoedaInicial = document.getElementById("moedaInicial")
const campoMoedaFinal = document.getElementById("moedaFinal")
const opcaoInicial = document.getElementsByClassName("opcaoInicial")
const opcaoFinal = document.getElementsByClassName("opcaoFinal")

//Verifica se o campo de valor está preenchido com informação válida
function validaDados(){

    if(campoValor.value == '' || parseFloat(campoValor.value) == NaN){
        campoValor.value = ''
        campoValor.style.borderColor = "#ff0000"
        campoValor.placeholder = "Insira um Valor Válido"
    }else{
        campoValor.style.borderColor = null
    }
}

function removeOpcao(){

    if(campoMoedaInicial.value == "real"){
        opcaoFinal[0].style.display = "none"
        opcaoFinal[1].style = null
        opcaoFinal[2].style = null
    } else if (campoMoedaInicial.value == "dolar"){
        opcaoFinal[1].style.display = "none"
        opcaoFinal[0].style = null
        opcaoFinal[2].style = null
    } else {
        opcaoFinal[2].style.display = "none"
        opcaoFinal[0].style = null
        opcaoFinal[1].style = null
    }

    if(campoMoedaFinal.value == "real"){
        opcaoInicial[0].style.display = "none"
        opcaoInicial[1].style = null
        opcaoInicial[2].style = null
    } else if (campoMoedaFinal.value == "dolar"){
        opcaoInicial[1].style.display = "none"
        opcaoInicial[0].style = null
        opcaoInicial[2].style = null
    } else {
        opcaoInicial[2].style.display = "none"
        opcaoInicial[0].style = null
        opcaoInicial[1].style = null
    } 
}

removeOpcao()