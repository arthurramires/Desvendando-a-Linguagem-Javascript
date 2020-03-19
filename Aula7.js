//Aula 7 - Fubctions - Parte 1

//É um objeto que contém um código executável

//Primeira forma - Function Declaration

function soma(a, b){
  return a + b;
}

//Segunda forma - Function Expression

var soma = function(a,b){
  return a + b;
}
//Invocando a função diretamente no escopo global
soma(5,2);//7
//Passando a função por parâmetro
var produto = {
  nome: 'Sapato',
  preco: 150
};
var imposto = function(preco){
  return preco * 0.1;
}

var calcularPreco = function (produto, imposto) {
  return produto.preco + imposto(produto.preco);
}

//Chamando a função
calcularPreco(produto, imposto);//165

//Retornando uma função
var helloWorld = function(){
  return function (){
    return "helloWorld"
  };
};

//Chamando a função
helloWorld();//[Function]
helloWorld()();//helloWorld

//Invocandouma função por meio de um objeto

var getIdade = function (){
  return this.idade;
}
var pessoa = {
  nome: "Alex",
  idade: 100,
  getIdade: getIdade,
};
/*
  Outra maneira:
  var pessoa = {
    nome: "Alex",
    idade: 100,
    getIdade: function(){
      return this.idade;
    }
  };
*/

pessoa.getIdade();//100

//Chamando por Call e Apply
//Call - Definir o escopo onde vou chamar a função
getIdade.call(pessoa);//20


//Funções Construtoras VS Funções Fábrica
//Funções Fábrica
var criarPessoa = function(nome, idade){
  return {
    nome: nome,
    idade: idade,
  };
};
//Função Construtora
var Pessoa = function (nome, idade){
  this.nome = nome;
  this.idade = idade;
};

//Chamando função Construtora
new Pessoa("Arthur", 15);
