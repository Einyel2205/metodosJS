// 7. Crea una función que valide cuántas vocales tiene el msg entregado.

let msg = "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios . ";


function countVowels() {

    let vowels = 0;
    for (let i = 0; i < msg.length; i++) {
        let letter=msg[i].toLocaleLowerCase();
        if (letter=='a' || letter=='A' || letter=='e' || letter=='i' || letter=='o' || letter=='u') {
            vowels++;
        }
    }
    return vowels;

}
console.log(countVowels());