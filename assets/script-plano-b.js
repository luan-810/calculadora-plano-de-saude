const idade = document.getElementById("idade");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");

const btnCalcular = document.getElementById("btn-calcular");

const precoBasicoB = document.getElementById("preco-b-basico");
const precoStandardB = document.getElementById("preco-b-standard");
const precoPremiumB = document.getElementById("preco-b-premium");

let imc = 0;
function calcularIMC(){
    imc = peso.value / (altura.value * altura.value);
}

let comorbidade = 0;
function fatorComorbidade(){
    if (imc < 18.5){
        comorbidade = 10;
    } else if (imc >= 18.5 && imc < 25){
        comorbidade = 1;
    } else if (imc >= 25 && imc < 30){
        comorbidade = 6;
    } else if (imc >= 30 && imc < 35){
        comorbidade = 10;
    } else if (imc >= 35 && imc <40){
        comorbidade = 20;
    } else {
        comorbidade = 30;
    }
}

let basicoB = 0;
function planoBasicoB(){
    basicoB = 100 + (comorbidade * 10 * (imc / 10));
    basicoB = basicoB.toFixed(2);
}
let standartB = 0;
function planoStandardB(){
    standartB = (150 + (comorbidade * 15)) * (imc /10);
    standartB = standartB.toFixed(2);
}
let premiumB = 0;
function planoPremiumB(){
    premiumB =  (200 - (imc * 10) + (comorbidade * 20)) * (imc / 10);
    premiumB = premiumB.toFixed(2);
}

function atualizarModal(){
    precoBasicoB.textContent = `R$ ${basicoB}`;
    precoStandardB.textContent = `R$ ${standartB}`;
    precoPremiumB.textContent = `R$ ${premiumB}`;
}

btnCalcular.addEventListener("click", calcularPlanoSaudeB);
function calcularPlanoSaudeB(){
    calcularIMC();
    fatorComorbidade();
    planoBasicoB();
    planoStandardB();
    planoPremiumB();
    atualizarModal();
}