/**
 * @autor Carlos Eduardo B. Souza
 * @version 0.0.1
 * Desenvolvido em 18/12/2019
 */

let usuario = {
    nome: 'Bruce'
};

// console.log(usuario);

//Alterando a propriedade de um objeto
usuario.nome = 'Bruce';
usuario['nome'] = 'Diana';


const prop = 'nome';
usuario[prop] = "Peter"

console.log(usuario);


//Criando uma propriedade
usuario.sobrenome = 'Parker'


//Deletando uma propriedade
delete usuario.nome;

console.log(usuario);