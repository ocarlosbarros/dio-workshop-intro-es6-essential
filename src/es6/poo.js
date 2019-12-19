/**
 * @author Carlos Eduardo B. Souza
 * @version 0.0.1
 * Desenvolvido em 19/12/2019
 */

 /**
  * Conceitos importantes em POO
  * constructor (tipo)
  * prototype
  * __proto__
  * 
  */

  const meuTexto = 'Olá prototype!';
console.log(meuTexto.split(''));// De onde vem o split ??

//__proto__ faz referencia a prototype da função construtora String
console.log(meuTexto.__proto__.split === String.prototype.split);//true
console.log(meuTexto.split === String.prototype.split);//true


//__proto__ -> prototype -> constructor
console.log(meuTexto.__proto__ === String.prototype);//true
//O construtor de meuTexto é String
console.log(meuTexto.constructor === String);//true


function Animal(){}

console.log(Animal.constructor);