document.getElementById("btn-calcular").addEventListener("click", () => {
    const melhorOferta = document.getElementById("recomendacao-final");
    
    planoA.calcular();
    planoB.calcular();

    const precosA = planoA.getPrecos();
    const precosB = planoB.getPrecos();

    let contadorA = 0;
    let contadorB = 0;

    if (precosA.basico > precosB.basico){
        contadorB++
    }else{
        contadorA++
    };
    if (precosA.standard > precosB.standard){
        contadorB++
    }else{
        contadorA++
    };
    if (precosA.premium > precosB.premium){
        contadorB++
    }else{
        contadorA++
    };
    
    if (contadorA < contadorB){
        melhorOferta.innerHTML = `A melhor oferta no cenário atual é o <strong>Plano B</strong>!`;
    }else{
        melhorOferta.innerHTML = `A melhor oferta no cenário atual é o <strong>Plano A</strong>!`;
    };

    console.log(contadorA, contadorB)

});