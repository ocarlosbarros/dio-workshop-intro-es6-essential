/**
 * @author Carlos Eduardo B Souza
 * @version 0.0.1
 * Desenvolvido em 18/12/2019
 */

 //Retorna o tamanho de uma string
 const tamanhoTexto = 'Minha string texto'.length
 console.log(`\n Quantidade de caracteres ${ tamanhoTexto }`);

 //Retorna um array quebrando a string apartir do valor delimitado
 const textoSplitado = 'Texteoe!'.split('e');
 console.log('\Array com as posição separadas por um delimitador: ', textoSplitado);

 //Buscar um valor e substituir por outro
 const textoSubstituido = 'Texto'.replace('e', 3).replace('o', 0);//Aceita Regex
 console.log('Substituicao de Texto ', textoSubstituido);

 //Retornar uma fatia da string
 const ultimoCaractere = 'Texto'.slice(-1);
 console.log('Ultimo caracter', ultimoCaractere);

 const tudoSemUltimoCaracter = 'The Man in the high castle'.slice(0, -1);
console.log('\Texto sem ultimo caractere', tudoSemUltimoCaracter);

//O ultimo valor pode ser omitido
const segundoAteFinal = 'The Man in the high castle'.slice(1);
console.log('Segundo caractere até o final', segundoAteFinal);

//Substring diferente de slice pois você informa o primeiro caracter e a quantidade
const texto = 'Texto'.substr(0, 2);
console.log(texto);