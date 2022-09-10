/**
 * @author Carlos Eduardo B Souza
 * @version 0.0.1
 * Desenvolvido em 18/12/2019
 */
 (() => {
   this.nome = 'Los Angeles Lakers';
    const getNomeArrowFn = () => this.nome;

 function getNome(){
     return this.nome;
 }

 const time = {
     nome: 'Los Angeles Clippers',
     getNomeArrowFn,
     getNome: getNome
 }

 console.log(time.getNomeArrowFn());
 console.log(time.getNome());
})();
