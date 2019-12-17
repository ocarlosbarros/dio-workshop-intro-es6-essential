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

function funcao(){
    log('Hoisting de Função');

    function log(value){
        console.log(value);
    }

}

funcao();