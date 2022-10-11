const narcissistic = (value) => {
    // Code me to return true or false
    let valueStr = value.toString();
    let valueLength = valueStr.length;
    let result = 0;
    for (let i = 0; i < valueLength; i++) {
        result += Math.pow(valueStr[i], valueLength);
    }
    if (result === value) {
        return true;
    }
    return false
}