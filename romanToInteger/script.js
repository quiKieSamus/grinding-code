/**
 * @param {string} s
 * @return {number}
 */
 const romanToInt = (s) => {
    let number = 0;
    let numbers = [];
    const individualTransform = (roman) => {
        switch(roman) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;

        }
    }
    
    for (let i = 0; i < s.length; i++) {
         numbers.push(individualTransform(s[i]));

    }
    if (numbers.length === 1) {
        return numbers[0];
    }
    for (let j = 0; j < numbers.length; j++) {
        if (j === numbers.length-1) {
            number += numbers[j];
            break;
        }
        if (numbers[j] < numbers[j+1]) number -= numbers[j];
        if (numbers[j] >= numbers[j+1]) number += numbers[j];

    }
    
    return number;
}