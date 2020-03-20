//Aula 13 - Statements
//for
for (var i = 0; i < array.length; i++) {
  array[i]
}
//if
if (condicao) {

}
//else
if (true) {

}else { //Caso a condicao não aconteça. o else é executado

}
//while - Enquanto a condicao acontecer o while é executado
while (true) {

}
//switch - Estrutura baseada em acontecimentos diferentes ou ações que podem ser executadas
switch (expressão) {
  case expression:

    break;
  default:
}
//throw - Executado quando ocorre um erro no código
//catch - captura algum erro e trata o mesmo
try {

} catch (e) {

}

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nisl lectus, sagittis eu leo eget, varius egestas neque. Nulla iaculis purus at arcu posuere, id venenatis massa euismod. Aenean sit amet arcu at massa finibus feugiat ac vitae ligula. Nullam viverra ex vehicula volutpat ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ac mollis diam. Quisque mattis sodales dui, aliquet facilisis erat sagittis sed. Donec a tristique velit. Pellentesque erat dolor, vehicula rutrum vestibulum quis, posuere ut nibh. Aenean suscipit venenatis lorem, sit amet finibus dolor. Phasellus dolor nibh, euismod nec dapibus vel, viverra eget dolor. Donec elit nisi, lacinia mattis vulputate id, cursus sit amet arcu."

var toHackerCase = function (text) {
  if (!text) throw "Invalid Text."
  var hackerTextArray = [];
  var i = 0;
  while (i < text.lenght){
    switch (text.charAt(i)) {
      case "o":
        hackerTextArray.push(0);
        break;
      case "l":
        hackerTextArray.push(3);
        break;
      case "l":
        hackerTextArray.push(4);
        break;
      default:

    }
  }
}
