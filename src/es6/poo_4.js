/**
 * @author Carlos Eduardo B. Souza
 * @version 0.0.1
 * Desenovovlvido em 19/12/2019
 */

 function Animal(){};

 Animal.prototype.quantidadePatas = 0;
 Animal.prototype.movimentar = function(){};

 function Cachorro(morde){
     this.quantidadePatas = 4;
     this.morde = morde;
 }

 Cachorro.prototype = Object.create(Animal);//Informa que Cachorro é derivado de animal
 Cachorro.prototype.latir = function(){
     console.log('Au! au! ...');
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
console.log(pitbull);