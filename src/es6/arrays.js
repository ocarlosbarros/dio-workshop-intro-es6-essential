/**
 * @author Carlos Eduardo B Souza
 * @version 0.0.1
 * Desenvolvido em 18/12/2019
 */

 const franquias = ['Los Angeles Lakers', 'Boston Celtics', 'Toronto Raptors', 'Miami Heat', 'Houston Rockets', 'Golden State Warriors']

 const conferencias = {
     LESTE : Symbol('LESTE'),
     OESTE : Symbol('OESTE')
 };

 const nba = [
     {
        nome: 'Los Angeles Lakers',
        titulos:16,
        conferencia: conferencias.OESTE
     },
     {
        nome: 'Boston Celtics',
        titulos:17,
        conferencia: conferencias.LESTE         
    },

    {
        nome: 'Golden State Warriors',
        titulos:6,
        conferencia: conferencias.OESTE
    },

    {
        nome: 'Toronto Raptors',
        titulos:1,
        conferencia: conferencias.LESTE
    },
 ]

 //Retornar a quantidade de itens de um array
 console.log('Itens: ', franquias.length);

 //Verificar se é um array
 console.log('\nA variável fraquias é um array: ', Array.isArray(franquias));

 //Iterar os itens de um array
 nba.forEach(equipe => {
     console.log(`Equipe: ${equipe.nome}`);
 });

 //Filter sempre a uma condicao para retornar um novo objeto -> array
 const conferenciaLeste = nba.filter(equipe => equipe.conferencia === conferencias.LESTE);

 console.log(conferenciaLeste);


 //Retornar um novo
 const participanteNba = nba.map(nba => {
     nba.isNba = true;
     return nba;
 });

 console.log(participanteNba);

 //Transforma um array em outro tipo
 const totalTitulos = nba.reduce(( titulos, equipe) => {
     titulos += equipe.titulos;
     return titulos;
 }, 0);

 console.log('\n Soma total de títulos das equipes é de: ', totalTitulos);