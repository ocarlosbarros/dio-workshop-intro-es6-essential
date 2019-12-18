/**
 * @author Carlos Eduardo B Souza
 * @version 0.0.1
 * Desenvolvido em 17/12/2019
 */

 var teste = "Exemplo de Escopo Global";//Escopo Global

 //Arrow Function 
 (() => {
    console.log(`Valor dentro da função "${ teste }"`);//Undefined 

    if(true){
        var teste = 'exemplo no if';//Sofre hoisting pois var nao respeita escobo de bloco
        console.log(`Valor dentro do if "${ teste }"`);//Exemplo
    }

    console.log(`Valor após execução do if "${ teste }"`);//Pega o valor de teste que sofreu hoisting
 })();//Execução imediata da função

 console.log('====================================================================================');

 (() => {
    let letTeste = 'Valor let função';
    console.log(`Valor let dentro da função "${ letTeste }"`);//Valor declarado acima

    if(true){
        let letTeste = 'Valor let If';
        console.log(`Valor let dentro do if "${ letTeste }"`);//Valor declarado acima respeitando escopo de bloco
    }

    console.log(`Valor let após execução do if "${ letTeste }"`);//Respeitando o escopo de bloco tem o valor da função e nao do if
  
 })();


 const nomeFranquia = 'Los Angeles Lakers';

 //Não se pode alterar o valor de tipos primitivos
 /*nomeFraquia = 'Boston Celtics';*/

/**
 * Em caso de objetos pode-se alterar as propriedades, pois nao se esta alterando a referencia
 * para os array segue o mesmo conceito
 */


 const franquia = {
     nome: 'Los Angeles Lakers'
 };

 //Alteração de Propriedade e não referência
 franquia.nome = 'Los Angeles Clippers';

 console.log(franquia);

 //Alteracao de referencia
/* franquia = { nome: 'Chicago Bulls' };*///TypeError: Assignment to constant variable.

const conferenciaLeste = ['Boston Celtics', 'Brooklyn Nets', 'Philadelphia 76ers', 'Toronto Raptors'];

console.log(conferenciaLeste);

conferenciaLeste.push('Milwaukee Bucks');//Inseri um novo valor no ultimo lugar do array

console.log(conferenciaLeste);

conferenciaLeste.shift();//Excluir o primeiro valor de array

console.log(conferenciaLeste);

conferenciaLeste[1] = 'Miami Heat';

console.log('\nArray após alterações', conferenciaLeste);
