/**
 * @autor Carlos Eduardo B. Souza
 * @version 0.0.1
 * Desenvolvido em 18/12/2019
 */

 const usuario = {
     nome: 'Bruce',
     sobreNome: 'Wayne'
 }

 //Recuperar as chaves do objeto
 console.log('Propriedades do objeto usuário: ', Object.keys(usuario));

 //Recuperar os valores das chaves do objeto
 console.log('\nValores das chaves do objeto usuário: ', Object.values(usuario));

 //Retorna um Array contendo [nome_prop, valor_prop]
 console.log('\nLista de propriedades e valores: ', Object.entries(usuario));


 //Mergiando objetos com Object.assign
Object.assign(usuario, {nomeCompleto: 'Bruce Wayne'});

console.log(usuario);

//Aplicando assign utilizando imutabilidade
console.log("\nRetornando um novo objeto mergeando dois ou mais objetos", Object.assign({}, usuario, {idade: 26}));

//Congelando um objeto
const vilao = {
    nome:'Jack',
    sobreNome:'Napier',
    cidadeNatal:'Gotham City'
}

Object.freeze(vilao);

delete vilao.sobreNome;

console.log(vilao);

//Permite alterar apenas propriedade existentes em um objeto
const heroi = {
    nome:'Peter'
};

Object.seal(heroi);

heroi.nome = 'Peter Parker';
delete heroi.nome;
heroi.idade = 18;

console.log('\n Variável herói após as alterações: ', heroi);