const createRandomNumberArr = (howManyNumbers) => {
    let arr = [];
    for (let i = 0; i < howManyNumbers; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    return arr;
}

const arr = createRandomNumberArr(512);

const bubbleSort = (input) => {
    const length = input.length;
    let comparisons = 0;
    for (let i = 0; i < length; i++) {
        let swapped = false;
        for (let j = 0; j < length - 1 - i; j++) {
            comparisons++;
            if (input[j] > input[j + 1]) {
                swap(input, j, j + 1);
                swapped = true;
            }
        }
        if (!swapped) {
            console.log("Already sorted")
            break;
        }

    }
    console.log(comparisons);
    return input;
}

const swap = (arr, positionA, positionB) => {
    const itemAtPositionA = arr[positionA];
    arr[positionA] = arr[positionB];
    arr[positionB] = itemAtPositionA;
    return arr;
}

console.log(bubbleSort(arr));