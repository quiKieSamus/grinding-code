const addToTarget = (arr, target) => {
    const targetValue = getTarget(arr, target);
    return targetValue;

}

const filterSearch = (arr, target) => {
    return arr.filter((number) => number <= target);
}

const searchComplement = (arr, number, indexOfNumberInArr, target) => {
    const complement = target - number;
    const complementIndex = arr.indexOf(complement, indexOfNumberInArr);
    return arr[complementIndex];
}

const getTarget = (arr, target) => {
    const filter = filterSearch(arr, target);
    for (let i = 0; i < filter.length; i++) {
        const number = arr[i];
        const complement = searchComplement(arr, number, i, target);
        if (complement !== -1 && complement) return [number, complement];
    }
    return [];
}


const generateRandomArr = (length, maxPossibleValue) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random()*Math.floor(maxPossibleValue)));
    }
    return arr;
}

console.log(addToTarget(generateRandomArr(1000000, 1000000), 1000000));