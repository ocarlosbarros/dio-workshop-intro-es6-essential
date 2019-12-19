/**
 * @author Carlos Eduardo B Souza
 * @version 0.0.1
 * Desenvolvido em 18/12/2019
 */

 //AND Lógico &&
 exp_1 && exp_2

var a_1 = true && true;         //t && t retorna true
var a_2 = true && false;        //t && f retorna false
var a_3 = false && true;        //f && t retorna false
var a_4 = false && ( 3 == 4);  //f && f retorna false
var a_5 = "Gato" && "Cão";      // t && t retorna cão
var a_6 = false && "Gato";      //f && t retorna false
var a_7 = "Gato" && false;     //t && f retorna false

 // OU logico ||
 exp_1 || exp_2

var o_1 = true && true;         //t && t retorna true
var o_2 = false && true;        //f && t retorna true
var o_3 = true && false;        //t && f retorna true
var o_4 = false && ( 3 == 4);  //f && f retorna false
var o_5 = "Gato" && "Cão";      // t && t retorna Gato
var o_6 = false && "Gato";      //f && t retorna Gato
var o_7 = "Gato" && false;     //t && f retorna Gato

//NOT Lógico !
!exp_1

var n_1 = !true; //!t retorna false
var n_2 = !false; //!f retorna true
var n_3 = !Gato; //!t retorna false