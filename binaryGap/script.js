// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

// Write a function: that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

// Write an efficient algorithm for the following assumptions:

//         N is an integer within the range [1..2,147,483,647].


//to convert decimal to binary, divide number by 2 and get every remainder
//(if a division gives a decimal number round it to its lowest integer)
//after getting all remainders, reverse them.
const binaryTransform = (n) => {
    let bits = "";
    let number = n;
    for (let i = 0; i <= n; i++) {
        if (Math.floor(number) % 2 === 0) {
            bits += "0";
        } else if (Math.floor(number) % 2 === 1) {
            bits += "1";
        } 
        if (Math.floor(number) === 1) {
            break;
        }
        number = Math.floor(number) / 2;
    }
    return bits.split("").reverse().join("");
}

const binaryGap = (n) => {
    if (typeof n !== 'number') {
        return 0;
    } else {
        const binaries = binaryTransform(n);
        console.log(binaries);
        let zeroCounter = 0;
        let max = 0;
        let firstOne;
        let lastOne = 0;
        for (let i = 0; i < binaries.length; i++) {
            if (binaries[i] === '1') {
                if (i === binaries.length-1) break;
                firstOne = i;
                for (let j = firstOne+1; j < binaries.length; j++) {
                    if (binaries[j] === '1' && j !== firstOne) {
                        lastOne = j;
                        break;
                    }
                }
                zeroCounter = lastOne - firstOne -1;
                if (zeroCounter > max) {
                    max = zeroCounter;
                    zeroCounter = 0;
                }
            }
        }
        return max > 1 ? max : 0;
    }
}

console.log(binaryTransform(1012));