const fibonacciNthNumber = (n) => {
    let nextTerm;
    let n1 = 0;
    let n2 = 1;
    for(let i = 0; i <= n; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    return nextTerm;
}

console.log(fibonacciNthNumber((5)));