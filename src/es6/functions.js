/**
 * @author Carlos Eduardo B. Souza
 * @version 0.0.1
 * Desenvolvido em 18/12/2019
 */

 function fn(){
     return 'Código aqui...';
 }
 
 console.log(fn());

 //Arrow Function de fn
 const arrowFn = () => 'Código aqui...';

 //Arrow Function com mais de uma expressão
 const arrowFnExpress = () => {
     //Mais uma expressoa
     return 'Código aqui...'
 }


 //Funções também são objeto e por isso podemos criar propriedades a ela
 fn.prop = 'Posso criar propriedades';

 console.log(fn());
 console.log(fn.prop);

 //Arrow functions recebendo parametros
 const logValor = valor => console.log(valor);
 const resultadoLogFn = fnParam => console.log(fnParam());

 resultadoLogFn(fn);

 //Recebendo e retornando funcoes
 const controleExecucao = fnParam => permitido => {
     if (permitido){
        fnParam();
     }
 };

 const handleExecucao = controleExecucao(fn);

 handleExecucao(true);//Executará funcao fn
 handleExecucao();//Não executará a funcao fn