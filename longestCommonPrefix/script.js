let strs = ["flower","flow","flight"];


const longestCommonPrefix = (strs) => {
    
    if (strs[0] === '') {
	return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }
    /*
     * We initialize prefix to the first letter of the first element
     * We also record each letter's position that gets added to the prefix it begins at
     * 0 since it is the first letter of the first element that gets added to the prefix*/
    let prefix = strs[0][0];
    let lastLetterAddedToPrefixPosition = 0;

    /*
     * This i variable is for iteration in the while loop
     * It serves the purpose to check each string against the regexp at the first if
     * If it reaches a value of strs.length-1 without breaking out of the while loop means
     * that every string matches the regexp and this variable will get set to 0 to begin
     * another iteration with the following letter*/
    let i = 1;
    while (i <= strs.length) {
	let regex = new RegExp(`${prefix}`, "i");
        if (!regex.test(strs[i])) {
		if (lastLetterAddedToPrefixPosition === 0) {
		prefix = "";
		}
		break;
	}
        else {
	    if (strs[i].match(regex).index !== lastLetterAddedToPrefixPosition) {    
		    if (prefix.length === 1) {
		        return "";
		    }
		    return prefix;
	    }
				
            if (i === strs.length-1) {
		lastLetterAddedToPrefixPosition++;
         	prefix += strs[0][lastLetterAddedToPrefixPosition];
		i = 0;
            }
        }
        i++;
    }

    return prefix.slice(0, prefix.length-1).replace(/undefine/g, "");
    
}

console.log(longestCommonPrefix(strs));
