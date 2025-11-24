const planoA = (() => {

    const idade = document.getElementById("idade");
    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");

    const camposPlanoA = {
        basico: document.getElementById("preco-a-basico"),
        standard: document.getElementById("preco-a-standard"),
        premium: document.getElementById("preco-a-premium")
    };

    let imc = 0;
    let basicoA = 0;
    let standardA = 0;
    let premiumA = 0;

    function calcular() {
        imc = peso.value / (altura.value ** 2);

        basicoA = (100 + idade.value * 10 * (imc / 10)).toFixed(2);
        standardA = ((150 + idade.value * 15) * (imc / 10)).toFixed(2);
        premiumA = ((200 - imc * 10 + idade.value * 20) * (imc / 10)).toFixed(2);

        camposPlanoA.basico.textContent = `R$ ${basicoA}`;
        camposPlanoA.standard.textContent = `R$ ${standardA}`;
        camposPlanoA.premium.textContent = `R$ ${premiumA}`;
    }

    return {calcular};
})();