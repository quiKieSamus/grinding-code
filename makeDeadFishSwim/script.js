const parse = (data) => {
    let result = 0;
    let resultArray = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 'i') {
            result++;
        }
        if (data[i] === 'd') {
            result--;
        }
        if (data[i] === 's') {
            result = result * result;
        }
        if (data[i] === 'o') {
            resultArray.push(result);
        } else {
            continue;
        }
    }
    return resultArray;
}