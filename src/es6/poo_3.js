/**
 * @author Carlos Eduardo B. Souza
 * @version 0.0.2
 * Desenvolvido em 19/12/2019
 */

//Herança
function Animal(quantidadePatas){
    this.quantidadePatas = quantidadePatas;
    this.movimentar = function() {}
}

function Cachorro(morde){
    Animal.call(this, 4);
    this.morde = morde;
    this.latir = function(){
        console.log('Au! au!...');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
console.log(pitbull);