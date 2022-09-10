/**
 * @author Carlos Eduardo B. Souza
 * @version 0.0.1
 * Desenvolvido em 18/12/2019
 */

 const meuNumero = 12.4032;

 //Transformar numero em string
 const numeroComoString = meuNumero.toString();
 console.log(" Meu numero transformado em string: ", typeof numeroComoString);

 //Fixar numero em casas decimais
 const fixoDoisDecimais = meuNumero.toFixed(2);
 console.log("Número com duas casas decimais ", fixoDoisDecimais);

 //Transformar string para float
console.log("string parseada para float", parseFloat('13.22'));

 //Transformar string para int
 console.log("string parseada para int", parseInt('13.22'));