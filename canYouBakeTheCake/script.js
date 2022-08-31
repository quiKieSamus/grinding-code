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
    return min;
} 

console.log(cakes({apples: 3, flour: 300, milk: 100, oil: 100, chocolate: 0}, {apples:3, oil:300, flour: 2000, milk: 300}));