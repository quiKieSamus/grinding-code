/**
 * find blank space position
 * iterate backwards to get first word
 * do word.search() to find position for each instance and increment a counter for the word then delete with word.replace()
 * once there's no more, repeat
 * 
 * 
 * 
 * par means paragraph
 */

const wordInstances = (par) => {
    let paragraph = par;
    const space = par.search(" ");
    console.log(space);
    let word = "";
    let wordCounter = 0;
    //while (pararaph !== ""){

    //}
    for (let i = 0; i < space; i++) {
        word += par[i];
    }

    console.log(par.replace(word , "", () => {
        wordCounter++
    }) === par);

    return wordCounter;
}

console.log(wordInstances("hola amigos como estan"));