// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

const colorFormatTransformation = (color) => {
    if (color[0] === '#') {
        let colorNoHashtag = color.replace('#', '');
        colorNoHashtag;

        let hexPairs = [];
        if (colorNoHashtag.length === 6) {
            let hexPair = '';
            for (let i = 0; i < colorNoHashtag.length; i++) {
                hexPair += colorNoHashtag[i];
                hexPair
                if (hexPair.length === 2) {
                    hexPairs.push(hexPair);
                    hexPair = '';
                }

            }
            
            let HexToRGB = 0;
            hexPairs
            for (let i = 0; i < hexPairs.length; i++) {
                switch (i) {
                    case 1:
                        switch (hexPairs[i]) {
                            case '0':
                                HexToRGB = 0;

                                break;
                            case '1':
                                HexToRGB = 1;

                                break;
                            case 2:
                                HexToRGB = 2;

                                break;
                            case 3:
                                HexToRGB = 3;

                                break;
                            case 4:
                                HexToRGB = 4;

                                break;
                            case 5:
                                HexToRGB = 5;

                                break;
                            case 6:
                                HexToRGB = 6;

                                break;
                            case 7:
                                HexToRGB = 7;
                                break;
                            case 8:
                                HexToRGB = 8;

                                break;
                            case 9:
                                HexToRGB = 9;

                                break;
                            case 'A':
                                HexToRGB = 10;

                                break;
                            case 'B':
                                HexToRGB = 11;

                                break;
                            case 'C':
                                HexToRGB = 12;

                                break;
                            case 'D':
                                HexToRGB = 13;

                                break;
                            case E:
                                HexToRGB = 14;

                                break;
                            case F:
                                HexToRGB = 15;

                                break;
                        }
                        break;

                    case 2:
                        switch (hexPairs[i]) {
                            case '0':
                                HexToRGB += 0;

                                break;
                            case '1':
                                HexToRGB += 1;

                                break;
                            case 2:
                                HexToRGB += 2;

                                break;
                            case 3:
                                HexToRGB += 3;

                                break;
                            case 4:
                                HexToRGB += 4;

                                break;
                            case 5:
                                HexToRGB += 5;

                                break;
                            case 6:
                                HexToRGB += 6;

                                break;
                            case 7:
                                HexToRGB += 7;
                                break;
                            case 8:
                                HexToRGB += 8;

                                break;
                            case 9:
                                HexToRGB += 9;

                                break;
                            case 'A':
                                HexToRGB += 10;

                                break;
                            case 'B':
                                HexToRGB += 11;

                                break;
                            case 'C':
                                HexToRGB += 12;

                                break;
                            case 'D':
                                HexToRGB += 13;

                                break;
                            case E:
                                HexToRGB += 14;

                                break;
                            case F:
                                HexToRGB += 15;

                                break;
                        }
                        break;
                }
                
            }
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
            decimalPart = decPart;
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
            first;
            let second = listOfNumbersToConvert[i] % 16;
            second;
            integerPart.push(truncate(first, 0));
            remainderPart.push(second);
            turnToHEX(integerPart[i], remainderPart[i]);

        }
        return RgbToHex;

    }
}

console.log(colorFormatTransformation("#ABCDEF"));


