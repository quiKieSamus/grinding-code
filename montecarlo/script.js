const montecarlo = (n) => {
    const mathResult = 4085;
    const b = 3;
    const a = 2;
    let randomNumbers = []; //getting random numbers
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.random() * 6);
    }

    let evalRandNuminFunction = []; //this array will contain all random numbers evaluated in f(x)
    for (let i = 0; i < randomNumbers.length; i++) {
        evalRandNuminFunction.push(3 * (Math.pow(randomNumbers[i], 2 + (2 * randomNumbers[i]))));
    }

    let approxResults = [];
    for (let i = 0; i < evalRandNuminFunction.length; i++) {
        approxResults.push(((b - a) / evalRandNuminFunction.length) * evalRandNuminFunction[i]);
    }

    let nearValues = [];
    for (let i = 0; i < approxResults.length; i++) {
        if (approxResults[i] <= (mathResult + 100) && approxResults[i] >= (mathResult - 100)) {
            nearValues.push(approxResults[i]);
        }
    }

    const obj_result = {
        mathResult: mathResult,
        approxResultsList: approxResults,
        randomNumbersList: randomNumbers,
        nearValuesList: nearValues,
        nearValuesListLength: nearValues.length
    };

    return obj_result.nearValuesListLength;
}