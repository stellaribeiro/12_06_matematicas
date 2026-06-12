
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

function calcularRaiz() {
    let numero = Number(document.getElementById("valor").value);
    document.getElementById("resultado").innerHTML = "Raiz quadrada de " + numero + ": " + Math.sqrt(numero);
}

function calcularPotencia() {
    let base = Number(document.getElementById("n1").value);
    let expoente = Number(document.getElementById("n2").value);
    document.getElementById("resultado").innerHTML = base + " elevado a " + expoente + ": " + Math.pow(base, expoente);
}

function sortear1a100() {
    let sorteado = Math.floor(Math.random() * 100) + 1;
    document.getElementById("resultado").innerHTML = "Número Sorteado: " + sorteado;
}

function encontrarMaior() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let n4 = Number(document.getElementById("n4").value);
    let n5 = Number(document.getElementById("n5").value);
    
    let maior = Math.max(n1, n2, n3, n4, n5);
    document.getElementById("resultado").innerHTML = "Maior valor entre os campos: " + maior;
}

function encontrarMenor() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let n4 = Number(document.getElementById("n4").value);
    let n5 = Number(document.getElementById("n5").value);
    
    let menor = Math.min(n1, n2, n3, n4, n5);
    document.getElementById("resultado").innerHTML = "Menor valor entre os campos: " + menor;
}

function jogarAdivinhacao() {
    let palpite = Number(document.getElementById("valor").value);
    
    if (palpite === numeroSecreto) {
        document.getElementById("resultado").innerHTML = "Acertou! O número era " + numeroSecreto + ". Um novo número secreto de 1 a 10 foi gerado!";
        numeroSecreto = Math.floor(Math.random() * 10) + 1;
    } else {
        document.getElementById("resultado").innerHTML = "Errou! O número " + palpite + " está incorreto. Tente outro palpite.";
    }
}

function calcularAbsoluto() {
    let numero = Number(document.getElementById("valor").value);
    document.getElementById("resultado").innerHTML = "Valor absoluto de " + Math.abs(numero);
}

function arredondarTudo() {
    let numero = Number(document.getElementById("valor").value);
    
    document.getElementById("resultado").innerHTML = 
        "Round (comum): " + Math.round(numero) + "<br>" +
        "Floor (para baixo): " + Math.floor(numero) + "<br>" +
        "Ceil (para cima): " + Math.ceil(numero);
}

function lancarDado() {
    let dado = Math.floor(Math.random() * 6) + 1;
    document.getElementById("resultado").innerHTML = "Resultado do dado: " + dado;
}

function lancarDoisDados() {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let soma = dado1 + dado2;
    
    document.getElementById("resultado").innerHTML = 
        "Dado 1: " + dado1 + "<br>" +
        "Dado 2: " + dado2 + "<br>" +
        "Soma dos Dados: " + soma;
}