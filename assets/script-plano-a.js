const idade = document.getElementById("idade");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

const btnCalcular = document.getElementById("btn-calcular");

const precoBasicoA = document.getElementById("preco-a-basico");
const precoStandardA = document.getElementById("preco-a-standard");
const precoPremiumA = document.getElementById("preco-a-premium");

let imc = 0;
function calcularIMC(){
    imc = peso.value / (altura.value * altura.value);
}



let basicoA = 0;
function planoBasicoA(){
    basicoA = 100 + (idade.value * 10 * (imc / 10));
    basicoA = basicoA.toFixed(2);
}
let standartA = 0;
function planoStandardA(){
    standartA = (150 + (idade.value * 15)) * (imc /10);
    standartA = standartA.toFixed(2);
}
let premiumA = 0;
function planoPremiumA(){
    premiumA =  (200 - (imc * 10) + (idade.value * 20)) * (imc / 10);
    premiumA = premiumA.toFixed(2);
}

function atualizarModal(){
    precoBasicoA.textContent = `R$ ${basicoA}`;
    precoStandardA.textContent = `R$ ${standartA}`;
    precoPremiumA.textContent = `R$ ${premiumA}`;
}

btnCalcular.addEventListener("click", calcularPlanoSaudeA);
function calcularPlanoSaudeA(){
    calcularIMC();
    planoBasicoA();
    planoStandardA();
    planoPremiumA();
    atualizarModal();
}