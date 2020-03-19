//Aula 9 - Arrays

//Criando

var carros = ['Ka', 'Fiesta'];
//Ou
var carros = new Array();

carros.valueOf();//"Ka, Fiesta"
//Tamanho do array
carros.length;//2
//Inserindo elemento
carros.push("Gol");//4
//Remover ultimo elemento
carros.pop();//'Gol'
//Inserir elemento no inicio
carros.unshift("Gol");
//Remove elementodo inicio
carros.shift();
//Localizar índice
carros.indexOf("Ka");//1
//Removendo elementos com Splice
var pos = carros.indexOf("Ka");
carros.splice(pos, 1);//['Fiesta']
//Substituindo elementos com Splice
carros.splice(pos, 1, "Sonic")
//Percorrer array com forEach
carros.forEach(function (elemento) {
  console.log(elemento);
});
//Filtrar apenas elementosda marca Ford
carros[0] = {marca: "Ford", modelo: "Ka", preco: 50000}
carros[1] = {marca: "Fiat", modelo: "Palio", preco: 40000}

carros.filter(function (elemento) {
  return elemento.marca === "Ford";
});//[{marca: "Ford", modelo: "Ka"}]

//Mapear elementos com o Map
carros.map(function (elemento) {
  return elemento.marca;
});//["Ford", "Fiat"]
//Processando elementos com Reduce
carros.reduce(function (elementoInicial, elementoAtual){
    return elementoInicial + elementoAtual.preco;
}, 0);//90000
//Ordenando elemetos com Sort
carros.sort(function (a, b) {
  return a.precp - b.preco;
})
