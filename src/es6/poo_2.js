/**
 * @author Carlos Eduardo B. Souza
 * @version 0.0.1
 * Desenvolvido em 19/12/2019
 */

 function Animal(){
     this.quantidadePatas = 4;
 }

 const cachorro = new Animal();

 console.log(cachorro);//4

 /**
  * new
  * 1 -  Quando eu chamo o new um novo objeto é criado a partir da função construtora
  * 2 - Esse novo objeto tem um __proto__ que aponta para o prototype da função que estou criando
  * 3 - Caso a função construtura tenha um retorno explicito será retornado o que estiver nesse return
  * e não o objeto criado
  */

  //Passo 3
  function Pessoa(nome){
      this.nome = nome;

      return {
        nome : 'Sem Nome',
      };
  }

  const p = new Pessoa('Diana Prince');

  console.log(p);// { nome: 'Sem Nome' }
      