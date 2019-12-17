/**
 * @author Carlos Eduardo B Souza
 * @version 0.0.1
 * Desenvolvido em 17/12/2019
 */

 //Vamos criar uma função comum de soma

 function soma(numero, numero_2){
     return numero + numero_2;
 }

/*console.log(soma(2,1));
console.log(soma(2,2));
console.log(soma(2,3));
console.log(soma(2,4));
*/

//Para este tipo de função poderiamos reaproveitar o 2 que é utilizado sempre

function somar(numero){
    return function(numero_2){
        return numero + numero_2;
    }
}

const soma_2 = somar(2); //Aqui criamos o valor padrão que será repetido

console.log(soma_2(1));
console.log(soma_2(2));
console.log(soma_2(3));
console.log(soma_2(4));