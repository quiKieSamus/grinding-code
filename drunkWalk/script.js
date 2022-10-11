const button = document.getElementById("btn");
const values = document.querySelector(".values");
const result = document.querySelector(".result");


const drunkWalk = () => {
    values.innerHTML = "";
    result.innerHTML = "";
    let x = 0;
    let y= 0;
    let n = 0;
    for (let i = 0; n < 10; i++) {
        let rand = Math.random() * 100;
        console.log(rand)
        if (rand > 0 && rand < 25) {
            y++
        }
        if (rand > 25 && rand < 50) {
            y--
        }
        if (rand > 50 && rand < 75) {
            x++
        }
        if (rand > 75 && rand < 100) {
            x--
        }
        n++
        values.innerHTML += " Valor en X: " + x + " Valor en y:" + y + "<br>";
    }
    let sum = x + y;
    sum;
    if (Math.abs(sum) >= 2) {
        result.innerHTML = "Éxito"
        return true
    } else {
        result.innerHTML = "Fracaso"
        return false;
    }
    
}

button.addEventListener('click', drunkWalk);