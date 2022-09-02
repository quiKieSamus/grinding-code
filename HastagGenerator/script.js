const generateHashtag = (str) => {
    str = str + " ";
    let strToReturn = '';
    let fragmentsOfText = ''
    if (str === '') return false;
    for (let i = 0; i < str.length; i++) {
        if(str[i] !== ' ') {
            fragmentsOfText += str[i];
            if (fragmentsOfText.length === 1) {
                fragmentsOfText = fragmentsOfText.toUpperCase();
            }
            fragmentsOfText
        } else {
            strToReturn += fragmentsOfText;
            fragmentsOfText = "";
            strToReturn
        }
         
 
    }
    if (strToReturn.length >= 140 || strToReturn.length === 0) {
        return false;
    } else {
        return "#" + strToReturn
    }
}

console.log(generateHashtag('Hola chicos y chicas del youtube'))