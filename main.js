class Animal {
    //una clase es como un blueprint que representa algo, esto es programacion orientada a objetos
    //aqui tu defines propiedades y metodos tal cual como un objeto en la vida real
    
    /**
     * esto es un metodo, es algo que puede hacer la clase, este metodo solo puede ser accedido    
     * creando una nueva instancia de la clase, como si fuera una impresora y para tener en una hoja
     *  de papel nueva informacion o informacion de interes, debes imprimirlo
     */
    
    animalRoar() {
        return "roaarr";
    }
}

/**
 * Una vez establecida la clase, la instanciamos, para poder usarla, la declaramos tal cual como una variable
 * o constante
 */

const lion = new Animal();

/**
 * Seguramente has visto esa nomenclatura antes con date asi "const time = new Date()" para aprovechar las
 * funcionalidades de tiempo
 */

/**
 * Ahora podemos usar la clase y su metodo referenciando a lion
 */

console.log(lion.animalRoar());