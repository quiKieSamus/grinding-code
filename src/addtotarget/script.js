// Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example:answer([1,2,3], 4)should return[1,3]

export const addToTarget = (arr, n) => 
{
    let newArr = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++)
        {
            if(arr[i] + arr[j] === n)
            {
                newArr.push(arr[i], arr[j]);
                return newArr;
            }
        }

    }
    return -1;
}

