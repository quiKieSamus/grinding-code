const cakes = (recipe, yourIngredients) => {
    const recipePropArray = Object.keys(recipe);
    const recipeLength = recipePropArray.length;
    const yourIngredientsPropArray = Object.keys(yourIngredients);
    let c = 0;
    let haveAllIngredients = false;
    let min;
    for (let i = 0; i < recipeLength; i++) {
        const checkedIngredient = recipePropArray[i];
        if (recipe[checkedIngredient] === 0) {
            delete recipe[checkedIngredient];
            delete yourIngredients[checkedIngredient];
            c++
        }
        for (let j = 0; j < recipeLength; j++) {
            if (checkedIngredient === recipePropArray[j] && recipe[checkedIngredient] <= yourIngredients[checkedIngredient]){
                c++;
            }

            if (c === recipeLength) {
                haveAllIngredients = true;
                break;
            }
        }
    }
    if (haveAllIngredients === true) {
        let usedResources = [];
        for (let i = 0; i < recipeLength; i++) {
            const checkedIngredient1 = Object.keys(recipe)[i];
            for (let j = 0; j < yourIngredientsPropArray.length; j++) {
                if (checkedIngredient1 === yourIngredientsPropArray[j]) {
                    let ingredientsDivision = yourIngredients[checkedIngredient1]/recipe[yourIngredientsPropArray[j]];
                    usedResources.push(ingredientsDivision);
                    usedResources.sort((a, b) => a - b);
                    
                }
            }
            min = usedResources[0];
            usedResources
            
            // for (let i = 0; i < usedResources.length; i++) {
            //     if (typeof min === 'undefined') {
            //         min = usedResources[0];
            //     }
            //     if (min >= usedResources[i]) {
            //         min = usedResources[i];
            //         min
                    
            //     }
            // }
        } 
    } else {
        return 0;       
    }
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
    return truncate(min, 0);
} 

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1000, sugar: 1000, eggs: 3, milk: 200}));