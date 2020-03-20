//Aula 15 - Herança - Parte 2
var Homem = function (nome, idade){
  this.nome = nome;
  this.idade = idade;
};

Homem.prototype.sexo = "masculino";//A função também possui uma propriedade chamada prototype que pode ser acessada

}

var joao = new Homem("João", 20);

var pedro = {}
pedro.__proto__ = Homem.prototype;
Homem.call(pedro, "Pedro", 18);
