const cakes = (recipe, yourIngredients) => {
    const recipePropArray = Object.keys(recipe);
    const recipeLength = recipePropArray.length;
    const yourIngredientsPropArray = Object.keys(yourIngredients);
    let c = 0;
    let haveAllIngredients = false;
    let min;
    for (let i = 0; i < recipeLength; i++) {
        const checkedIngredient = yourIngredientsPropArray[i];
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
            const checkedIngredient1 = recipePropArray[i];
            for (let j = 0; j < yourIngredientsPropArray.length; j++) {
                if (checkedIngredient1 === yourIngredientsPropArray[j]) {
                    usedResources.push(yourIngredients[checkedIngredient1]/recipe[yourIngredientsPropArray[j]]);
                    usedResources.sort((a, b) => a - b)
                }
            }
            min = usedResources[i];
            for (let i = 0; i < usedResources.length; i++) {
                if (min >= usedResources[i]) {
                    min = usedResources[i];
                }
            }

        } 
    } else {
        return "You can't even make a single cake"       
    }
    return `Yo can make ${Math.round(min)} cakes`;
}

console.log(cakes({flour: 500, sugar: 200, egg: 15, chocolate: 30}, {flour: 5000000, sugar: 2000000, egg: 150000, chocolate: 110}));
