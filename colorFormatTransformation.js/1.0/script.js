// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

export const colorFormatTransformation = (color) => {
    if (color[0] === '#') {
        let colorNoHashtag = color.replace('#', '');

        let hexPairs = [];
        if (colorNoHashtag.length === 6) {
            let hexPair = '';
            for (let i = 0; i < colorNoHashtag.length; i++) {
                hexPair += colorNoHashtag[i];
                if (hexPair.length === 2) {
                    hexPairs.push(hexPair);
                    hexPair = '';
                }

            }

            //helper function to calculate hex to rgb to invoke
            const HexToRGB = (a, b) => {
                let result = 0;
                let b1 = b;
                const HexToRGB2 = (b = b1) => {
                    switch (b) {
                        case '0':
                            result += 0;
                            break;
                        case '1':
                            result += 1;
                            break;
                        case '2':
                            result += 2;
                            break;
                        case '3':
                            result += 3;
                            break;
                        case '4':
                            result += 4;
                            break;
                        case '5':
                            result += 5;
                            break;
                        case '6':
                            result += 6;
                            break;
                        case '7':
                            result += 7; 
                            break;
                        case '8':
                            result += 8;
                            break;
                        case '9':
                            result += 9;
                            break;
                        case 'A':
                            result += 10;
                            break;
                        case 'B':
                            result += 11;
                            break;
                        case 'C':
                            result += 12;
                            break;
                        case 'D':
                            result += 13;
                            break;
                        case 'E':
                            result += 14;
                            break;
                        case 'F':
                            result += 15;
                            break;
                    }    
                    return result;
                }
                switch (a) {
                    case '0':
                        result += 0 + HexToRGB2();
                        break;
                    case '1':
                        result = 1 * 16 + HexToRGB2();
                        break;
                    case '2':
                        result = 2 * 16 + HexToRGB2();
                        break;
                    case '3':
                        result = 3 * 16 + HexToRGB2();
                        break;
                    case '4':
                        result = 4 * 16 + HexToRGB2();
                        break;
                    case '5':
                        result = 5 * 16 + HexToRGB2();
                        break;
                    case '6':
                        result = 6 * 16 + HexToRGB2();
                        break;
                    case '7':
                        result = 7 * 16 + HexToRGB2();
                        break;
                    case '8':
                        result = 8 * 16 + HexToRGB2();
                        break;
                    case '9':
                        result = 9 * 16 + HexToRGB2();
                        break;
                    case 'A':
                        result = 10 * 16 + HexToRGB2();
                        break;
                    case 'B':
                        result = 11 * 16 + HexToRGB2();
                        break;
                    case 'C':
                        result = 12 * 16 + HexToRGB2();
                        break;
                    case 'D':
                        result = 13 * 16 + HexToRGB2();
                        break;
                    case 'E':
                        result =  14 * 16 + HexToRGB2();
                        break;
                    case 'F':
                        result =  15 * 16 + HexToRGB2();
                        break;
                }
                return result;
            }
            let hexResult = [];
            for (let i = 0; i < hexPairs.length; i++) {
                for (let j = 0; j < hexPairs[i].length-1; j++) {
                    hexResult.push(HexToRGB(hexPairs[i][j], hexPairs[i][j+1]));

                }
            }

            return `RGB(${hexResult[0]}, ${hexResult[1]}, ${hexResult[2]})`
            
        }
        else {
            
        }
    }
    else {
        let numberToConvert = [];
        let listOfNumbersToConvert = [];

        for (let i = 0; i < color.length; i++) {
            if (color[i] !== ',') {
                numberToConvert.push(color[i]);
            }
            if (color[i] === ',') {
                listOfNumbersToConvert.push(numberToConvert.join(""))
                numberToConvert = [];
            }
            if (i === color.length - 1) {
                listOfNumbersToConvert.push(numberToConvert.join(""));
                numberToConvert = [];
            }
        }

        let integerPart = [];
        let remainderPart = [];

        //following code from https://www.codegrepper.com/code-examples/javascript/javascript+truncate+decimal+without+rounding
        const truncate = (number, index) => //function to truncate decimals without rounding 
        {
            //if and else statements added by quiKieSamus
            if (number.toString().length !== 1) {
                return +number.toString().slice(0, (number.toString().indexOf(".")) + (index + 0));
            }
            else {
                return number
            }
            // cutting the number

        }
        //end of quoted code
        let RgbToHex = "#";
        const turnToHEX = (intPart, decPart) => {
            let decimalPart = decPart;
            const turnToHEXDecPart = (decPart = decimalPart) => {
                switch (decPart) {
                    case 0:
                        RgbToHex += "0";
                        break;
                    case 1:
                        RgbToHex += "1";
                        break;
                    case 2:
                        RgbToHex += "2";
                        break;
                    case 3:
                        RgbToHex += "3";
                        break;
                    case 4:
                        RgbToHex += "4";
                        break;
                    case 5:
                        RgbToHex += "5";
                        break;
                    case 6: ffaa00
                        RgbToHex += "6";
                        break;
                    case 7:
                        RgbToHex += "7";
                        break;
                    case 8:
                        RgbToHex += "8";
                        break;
                    case 9:
                        RgbToHex += "9";
                        break;
                    case 10:
                        RgbToHex += "A";
                        break;
                    case 11:
                        RgbToHex += "B";
                        break;
                    case 12:
                        RgbToHex += "C";
                        break;
                    case 13:
                        RgbToHex += "D";
                        break;
                    case 14:
                        RgbToHex += "E";
                        break;
                    case 15:
                        RgbToHex += "F";
                        break;
                }
            }
            switch (intPart) {
                case 0:
                    RgbToHex += "0";
                    turnToHEXDecPart();
                    break;
                case 1:
                    RgbToHex += "1";
                    turnToHEXDecPart();
                    break;
                case 2:
                    RgbToHex += "2";
                    turnToHEXDecPart();
                    break;
                case 3:
                    RgbToHex += "3";
                    turnToHEXDecPart();
                    break;
                case 4:
                    RgbToHex += "4";
                    turnToHEXDecPart();
                    break;
                case 5:
                    RgbToHex += "5";
                    turnToHEXDecPart();
                    break;
                case 6:
                    RgbToHex += "6";
                    turnToHEXDecPart();
                    break;
                case 7:
                    RgbToHex += "7"; turnToHEXDecPart();
                    break;
                case 8:
                    RgbToHex += "8";
                    turnToHEXDecPart();
                    break;
                case 9:
                    RgbToHex += "9";
                    turnToHEXDecPart();
                    break;
                case 10:
                    RgbToHex += "A";
                    turnToHEXDecPart();
                    break;
                case 11:
                    RgbToHex += "B";
                    turnToHEXDecPart();
                    break;
                case 12:
                    RgbToHex += "C";
                    turnToHEXDecPart();
                    break;
                case 13:
                    RgbToHex += "D";
                    turnToHEXDecPart();
                    break;
                case 14:
                    RgbToHex += "E";
                    turnToHEXDecPart();
                    break;
                case 15:
                    RgbToHex += "F";
                    turnToHEXDecPart();
                    break;
            }
        }
        for (let i = 0; i < listOfNumbersToConvert.length; i++) {
            let first = listOfNumbersToConvert[i] / 16;
            let second = listOfNumbersToConvert[i] % 16;
            integerPart.push(truncate(first, 0));
            remainderPart.push(second);
            turnToHEX(integerPart[i], remainderPart[i]);

        }
        return RgbToHex;

    }
}


console.log(colorFormatTransformation("190,24,10"))