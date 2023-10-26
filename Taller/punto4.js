// 4. Extrae la palabra "ejercicios" del mensaje entregado.
// imprime por consola

let msg = "A continuación le estoy entregando una cadena de texto que servirá como texto guía para realizar los siguientes ejercicios . ";

msg = msg.slice(0, -3);
console.log(msg.substring(msg.indexOf('ejercicios')));