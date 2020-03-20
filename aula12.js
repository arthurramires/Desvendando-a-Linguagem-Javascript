//Aula 12 - Operadores

10 == '10'//true
10 === '10'//false pois está comparando o valor e o tipo

var generateSerial = function(max){
  return Math.floor(Math.random() * max);
};

generateSerial(10);//7
generateSerial(100);//90

/*
  && - e
  || - ou
  ! - negação
  in - Verifica se a propriedade faz parte do objeto
  += - reatribuicao de uma soma
  -= - reatribuição de uma subtração
*/
var pessoa = {
  nome: "Arthur",
}
"nome" in pessoa; //true
"peso" in pessoa; //false
