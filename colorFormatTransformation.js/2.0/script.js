/**
 * function that takes the 3 components of an rgb and convert their values into hex
 * @param {Array<number>} components
 */
const rgbToHex = (components) => {
    const value = components.map((component) => {
        const firstPart = component / 16;
        const secondPart = (firstPart - parseInt(firstPart)) * 16
        return [
            chartRgbToHex(Math.floor(firstPart)),
            chartRgbToHex(Math.floor(secondPart))
        ].join('');
    });
    return value.join('');
}

/**
 * 
 * @param {Array<string>} components 
 * @returns 
 */
const hexToRGB = (components) => {
    const values = components.map((component) => {
        const separatedValues = component.split('');
        const hexToRgbParts = separatedValues.map((part, index, arr) => {
            const value = chartHexToRgb(part);
            console.log(value);
            if (!value) console.log("Un numero no es correcto");
            const decimalConversion = Math.pow(part * 16, arr.length-index);
            return decimalConversion;
        });
        return hexToRgbParts
    });
    return values;
}

/**
 * function to convert rgb value to the respective hex counterpart
 * @param {number} data 
 */
const chartRgbToHex = (data) => {
    if (data < 10) return data;
    switch (data) {
        case 10: return 'A';
        case 11: return 'B';
        case 12: return 'C';
        case 13: return 'D';
        case 14: return 'E';
        case 15: return 'F';
        default: false;
    }
}

/**
 * function to convert hex values into their respective rgb counterpart
 * @param {string} data
 */
const chartHexToRgb = (data) => {
    if (Number.isNaN(parseInt(data))) {
        switch (data) {
            case 'A': return 10;
            case 'B': return 11;
            case 'C': return 12;
            case 'D': return 13;
            case 'E': return 14;
            case 'F': return 15;
        }
        return false;
    }
    return parseInt(data);
}

console.log(hexToRGB(["7A", "BC", "30"]));