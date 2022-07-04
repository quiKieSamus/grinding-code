//Clean the room function: given an input of[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For exampleanswer(ArrayFromAbove)should return:[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

//A bit buggy, gotta fix and should try to do the bonus section

let arr = [1, 1, 2, 3, 4, 4, 5, 6, 6];

const orderArray = (arr) => {
	let subArr = []; //subarray to push in newArr with equal items
	let newArr = []; //array to be returned where all subarrays and items that do not repeat will be stored
	arr.sort((a, b) => a - b);

	if (arr[0] !== arr[1]) {
		newArr.push(arr[0])
	}
	if(arr.length > 1)
	{
		for (let i = 0; i < arr.length; i++) {
			while (arr[i] === arr[i + 1]) {
				subArr.push(arr[i + 1]);
				i++;
			}
			if (arr[i] !== arr[i + 1] && arr[i + 1] !== arr[i + 2]) {
				newArr.push(arr[i + 1]);
			}
	
	
			subArr.push(subArr[0]);
			newArr.push(subArr);
			subArr = [];
		}
	}
	

	const clearUndefinedItem = () =>
	{
		for (let j = 0; j < arr.length; j++) {
			if (typeof newArr[j] === 'object') {
				if (typeof newArr[j][0] === 'undefined') {
					newArr.splice(j, 1);
				}
			}
		}
	}

	clearUndefinedItem();
	clearUndefinedItem();
	

	return newArr;
}

console.log(orderArray([]));
