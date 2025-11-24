const planoB = (() => {

    const idade = document.getElementById("idade");
    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");

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

        imc = peso.value / (altura.value ** 2);

        if (imc < 18.5) comorbidade = 10;
        else if (imc < 25) comorbidade = 1;
        else if (imc < 30) comorbidade = 6;
        else if (imc < 35) comorbidade = 10;
        else if (imc < 40) comorbidade = 20;
        else comorbidade = 30;

        basicoB = (100 + comorbidade * 10 * (imc / 10)).toFixed(2);
        standardB = ((150 + comorbidade * 15) * (imc / 10)).toFixed(2);
        premiumB = ((200 - imc * 10 + comorbidade * 20) * (imc / 10)).toFixed(2);

        camposPlanoB.basico.textContent = `R$ ${basicoB}`;
        camposPlanoB.standard.textContent = `R$ ${standardB}`;
        camposPlanoB.premium.textContent = `R$ ${premiumB}`;
    }

    return {calcular};
})();