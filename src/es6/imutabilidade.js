/**
 * @author Carlos Eduardo B Souza
 * @version 0.0.1
 * Desenvolvido em 17/12/2019
 */

const usuario = {
    nome: 'Gabriel',
    sobreNome: 'Toledo'
};

function getUsuarioComNomeCompleto(usuario){
    return {
        ...usuario,//operador spred
        nomeCompleto: ` ${ usuario.nome } ${ usuario.sobreNome }`
    };
}

const usuarioComNomeCompleto = getUsuarioComNomeCompleto(usuario);

console.log(usuarioComNomeCompleto);