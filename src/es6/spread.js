//Spread ...
var partes = ['ombro', 'joelho'];
var musica = ['cabeca', ...partes, 'e', 'pés'];

console.log(musica);

function fn(x, y, z){
    return x + y + z;
}
var args = [0, 1, 2];

console.log(fn(...args));

//Outros operadores

//Deletar algo
delete algo;

//Determinar tipo
typeof algo;

//in
algo in algoItens

var arvores = new Array("Pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;//retorna true
3 in arvores;//retorna true
6 in arvores;//retorna false
"cedro" in arvores;//retorna false (você deve especificar o número do índice)
"cedro" in arvores[2];//retorna true
"length" in arvores//retorna true (length é uma propriedade de Array)

//Objetos predefinidos
"PI" in Math; //retorna true
var minhaString = new String("coral");
"length" in minhaString; //retorna true

//Objetos personalizados
var meuCarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meuCarro; //retorna true
"modelo" in meuCarro; //retorna true

//instaceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 18);

if(dia instanceof Date){
    //Código aqui...
}