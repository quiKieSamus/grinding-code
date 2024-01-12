/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    // getting individual chars that make up the word
    const sChars = Array.from(new Set(s.split('')));

    //checking that there isn't any char that repeats more than 3 times consecutively
    for (let i = 0; i < sChars.length; i++) {
        const char = sChars[i];
        const appearances = howManyTimesCharRepeatsSequentially(s, char);
        for (let j = 0; j < appearances.length; j++) {
            if (appearances[j].counter > 3) return "Invalid Roman Number";
        }
    }

    let number = 0;
    let numbers = [];

    for (let i = 0; i < s.length; i++) {
        numbers.push(individualTransform(s[i]));

    }
    if (numbers.length === 1) {
        return numbers[0];
    }
    for (let j = 0; j < numbers.length; j++) {
        if (j === numbers.length - 1) {
            number += numbers[j];
            break;
        }
        if (numbers[j] < numbers[j + 1]) number -= numbers[j];
        if (numbers[j] >= numbers[j + 1]) number += numbers[j];

    }

    return number;
}

const individualTransform = (roman) => {
    switch (roman) {
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

/**
 * 
 * @param {string} str 
 * @param {string} char 
 */
const howManyTimesCharRepeatsSequentially = (str, char) => {
    let counter = 0;

    //lowercasing the params
    str = str.toLowerCase();
    char = char.toLowerCase();

    // getting first apparition of char
    let currentAppearance = str.indexOf(char);

    // it was not found, return 0
    if (currentAppearance === -1) return 0;

    // there is at least one isntance of char, so we increment by one the counter
    counter++;

    let appearanceInstances = [];
    // starting to search for other possible instances from the following index
    // after first appearance
    for (let i = currentAppearance + 1; i < str.length; i++) {
        const followingChar = str.charAt(i);
        if (followingChar === str[currentAppearance]) counter++;
        else {
            if (counter > 0) appearanceInstances.push({ from: currentAppearance, to: i - 1, counter: counter });
            counter = 0;
            currentAppearance = str.indexOf(char, i);
            if (currentAppearance === -1) return appearanceInstances;
        }
    }

    return appearanceInstances;
}

console.log(romanToInt("XXXXI"));