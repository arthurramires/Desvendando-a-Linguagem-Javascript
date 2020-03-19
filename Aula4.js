//Aula 4 - Boolean

var isento = true;
var estudante = false;

isento.toString();//"true"
estudante.valueOf();//false

if(estudante){
  console.log(estudante);
}
//A verificação não será executada pois estudante é false


//!!Cuidado com truthy e falsy
