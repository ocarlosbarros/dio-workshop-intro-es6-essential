/**
 * @author Carlos Eduardo B. Souza
 * @version 0.0.1
 * Desenvolvido em 17/12/2019
 */

//Hoisting de Variáveis
function fn(){
    console.log(text);//Saída undefined

    var text = 'Exemplo';

    console.log(text);//Saída Exemplo
}

fn();

//Hoisting Funções
//Neste segundo caso a função foi utilizada antes de sua declaração sem problemas ou undefined
//no caso de hoisting de funções a função é usada como todo
function funcao(){
    log('Hoisting de Função');

    function log(value){
        console.log(value);
    }

}

funcao();