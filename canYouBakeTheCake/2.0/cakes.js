const cakes = (recipe, ingredients) => {
    const recipeIngredients = getPropertiesArray(recipe);
    if (!verifyPropertiesExist(recipeIngredients, ingredients)) return 0;

    let isEnoughIngredientArray = [];
    for (let i = 0; i < recipeIngredients.length; i++) {
        const recipeIngredient = recipeIngredients[i];
        const isEnoughIngredient = haveEnoughIngredient(recipeIngredient, recipe, ingredients);
        if (!isEnoughIngredient) return 0;
        isEnoughIngredientArray.push(isEnoughIngredient);
    }

    let sortedIsEnoughArray = isEnoughIngredientArray.sort((a, b) => a.howMany - b.howMany);
    return sortedIsEnoughArray[0].howMany;
};

// obtain the properties of an object as an array
const getPropertiesArray = (object) => {
    return Object.getOwnPropertyNames(object)
};

// checks whether an object has all the properties that another object has
const verifyPropertiesExist = (properties, objectToCompareWith) => {
    for (let i = 0; i < properties.length; i++) {
        const property = properties[i];
        if (!objectToCompareWith[property]) return false;
    }

    return true;
}

/**
 * receives the name of an ingredient, 
 * the ingredient object of a recipe and your ingredients object
 * returns an object with data on whether or not you have enough of an ingredient
 * @param {string} recipeIngredient 
 * @param {object} recipeIngredients 
 * @param {object} ingredients 
 * @returns {object | boolean}
 */
const haveEnoughIngredient = (recipeIngredient, recipeIngredients, ingredients) => {
    let counter = 0;
    while (ingredients[recipeIngredient] >= recipeIngredients[recipeIngredient]) {
        ingredients[recipeIngredient] -= recipeIngredients[recipeIngredient];
        counter++;
    }
    return counter > 0 ? {enough: true, howMany: counter, ingredient: recipeIngredient} : false;
}

console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));