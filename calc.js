function adicionarValor(valor) {
    var resultado = document.getElementById('resultado');
    resultado.value = resultado.value + valor;
}

function calcular() {
    var resultado = document.getElementById('resultado');
    var expressao = resultado.value;
    try {
        resultado.value = eval(expressao);
    } catch (e) {
        resultado.value = "Algo de errado não está certo";
    }
}

function limpar() {
    var resultado = document.getElementById('resultado');
    resultado.value = "";
}