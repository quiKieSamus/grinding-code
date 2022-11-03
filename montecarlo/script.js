const g = (x) => {
    return((3*Math.pow(x, 2))+ (2*x));
}

const montecarlo = (g, a, b, m) => {
    //theorical result
    const mathResult = 24;

    let s = 0;

    //sum of f(xi)
    for (let i = 0; i < m; i++) {
        s += g(a + (b-a) * Math.random());
    }

    //main formula
    let result = ((b-a)/m)*s;

    const obj_result = {
        mathResult: mathResult,
        monteCarloResult: result,
        errorMargin: Math.abs((mathResult - result) / (mathResult*100)).toFixed(6) 
    };
    //test
    return obj_result;
}

console.log(montecarlo(g, 2, 3, 1000));

//page display
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