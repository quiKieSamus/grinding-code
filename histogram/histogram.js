const arr = [1, 2, 3, 2, 1, 2, 4, 4, 4];

const indexHistogram = (arr, index) => {
    const arrLength = arr.length;
    let counter = "";
    let appearences = [];
    for (let i = 0; i < arrLength; i++) {
        if (arr[i] === arr[index]) {
            counter += "*";
            if (counter.length > 1) {
                continue;
            }
            appearences.push(i)
        }
    }
    // return `${arr[index]}: ${counter} | Appearence: ${appearences}`;
    return {
        frequency: `${arr[index]}: ${counter}`,
        appearence: appearences
    }
}

// const allIndexHistogram = (arr) => {
//     let sortedArr = arr.sort();
//     for (let i = 0; i < sortedArr.length; i++) {
//         for (let j = 1; j < sortedArr.length; j++) {
//             if (sortedArr[i] === sortedArr[j]) {
//                 delete sortedArr[j];
//                 j=1;
//             }
//             console.log(sortedArr);
//         }
//     }
// }

