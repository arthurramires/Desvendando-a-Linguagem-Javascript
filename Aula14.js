//Aula 14 - Herança - Parte 1
//Objetos podem ser organizados em pais e filhos e os filhos podem herdar propriedades dos pais

var homem = {
  sexo: "masculino"
}

var pedro = {
  nome: "Pedro",
  idade: 20,
}

Object.setPrototypeOf(pedro, homem);
console.log(pedro.sexo);//'masculino'

for (var props in pedro){
  console.log(props);
  /*
    nome
    idade
    sexo
  */
}

var lula = {
  nome: "Lula",
  idade: 1000,
}
