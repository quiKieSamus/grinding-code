const g = (x) => {
    return((3*Math.pow(x, 2))+ (2*x));
}

const montecarlo = (g, a, b, m) => {
    const mathResult = 24;

    let s = 0;

    for (let i = 0; i < m; i++) {
        s += g(a + (b-a) * Math.random());
    }

    let result = ((b-a)/m)*s;

    const obj_result = {
        mathResult: mathResult,
        monteCarloResult: result,
        errorMargin: Math.abs((mathResult - result) / (mathResult*100)) 
    };

    return obj_result;
}

const btnProcess = document.getElementById("btn-process");
const input = document.getElementById('sim-total');

btnProcess.addEventListener('click', () => {
    const realResElm = document.querySelector(".math-result");
    const montResElm = document.querySelector(".monte-carlo");
    const errMargElm = document.querySelector(".error-margin");
    
    const result = montecarlo(g, 2, 3, input.value);
    realResElm.innerHTML = result.mathResult;
    montResElm.innerHTML = result.monteCarloResult;
    errMargElm.innerHTML = result.errorMargin;
    

});