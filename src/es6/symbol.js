/**
 * @author Carlos Eduardo B. Souza
 * @version 0.0.1
 * Desenvolvido em 18/12/2019
 */

 const symbol_1 = Symbol();
 const symbol_2 = Symbol();

 //Symbol são unicos
 console.log('symbol_1 é igual a symbol_2 ', symbol_1 === symbol_2);

 //Previnir conflito entre nomes
 const sobreNomeSymbol_1 = Symbol('sobreNome');
 const sobreNomeSymbol_2 = Symbol('sobreNome');

 const usuario = {
    nome: 'Bruce',
    [sobreNomeSymbol_1] : 'Wayne',
    [sobreNomeSymbol_2] : 'Banner',
 }

 console.log(usuario);

 //Podemos utilizar Symbol para criar enums
 const direcoes = {
     CIMA : Symbol(' CIMA '),
     BAIXO : Symbol(' BAIXO '),
     ESQUERDA : Symbol(' ESQUERDA '),
     DIREITA : Symbol(' DIREITA '),
 };

 //Symbols cruar propriedades que nao sao enumerables
 for(const i in usuario){
     if(usuario.hasOwnProperty(i)){
         console.log(`\nValor da chave ${i}: ${usuario[i]}`)
     }
 }
 //Symbols nao sao exibidos com Object.keys nem Object.values
 console.log('Propriedades do objeto usuario: ', Object.keys(usuario));
 console.log('Valores das propriedades do objeto usuario ', Object.values(usuario));

 //Exibir Symbols de um objeto
 console.log('Symbols registrados no objeto usuario', Object.getOwnPropertySymbols(usuario));

 //Acessando todas as propriedades do Objeto com Reflect
 console.log('Todas as propriedades do Objeto usuario ', Reflect.ownKeys(usuario));
