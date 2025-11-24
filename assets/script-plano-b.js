const planoB = (() => {

    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");
    const avisoNegativo = document.getElementById("aviso-negativo");

    const camposPlanoB = {
        basico: document.getElementById("preco-b-basico"),
        standard: document.getElementById("preco-b-standard"),
        premium: document.getElementById("preco-b-premium")
    };

    let imc = 0;
    let comorbidade = 0;
    let basicoB = 0;
    let standardB = 0;
    let premiumB = 0;

    function calcular() {

        imc = peso.value / (altura.value * altura.value);

        if (imc < 18.5) comorbidade = 10;
        else if (imc < 25) comorbidade = 1;
        else if (imc < 30) comorbidade = 6;
        else if (imc < 35) comorbidade = 10;
        else if (imc < 40) comorbidade = 20;
        else comorbidade = 30;

        basicoB = (100 + comorbidade * 10 * (imc / 10));
        standardB = ((150 + (comorbidade * 15)) * (imc / 10));
        premiumB = ((200 - (imc * 10) + (comorbidade * 20)) * (imc / 10)); //essa formula gera resultados negativos para IMCs saudáveis
        
        camposPlanoB.basico.textContent = `R$ ${basicoB.toFixed(2)}`;
        camposPlanoB.standard.textContent = `R$ ${standardB.toFixed(2)}`;
        
        if (premiumB < 0){ //avisa o pq do numero negativo
            camposPlanoB.premium.innerHTML = `<span class="text-danger fw-bold">R$ ${premiumB.toFixed(2)} *</span>`;
            if(avisoNegativo) avisoNegativo.classList.remove('d-none'); 
        } else {
            camposPlanoB.premium.textContent = `R$ ${premiumB.toFixed(2)}`;
            if(avisoNegativo) avisoNegativo.classList.add('d-none'); 
        }
    }

    function getPrecos() {
        return {
            basico: basicoB,
            standard: standardB,
            premium: premiumB
        };
    }

    return {calcular, getPrecos};
})();