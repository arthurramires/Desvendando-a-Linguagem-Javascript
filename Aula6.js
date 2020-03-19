//Aula 6 - Objects

/*
  É uma coleção dinâmica de chaves e valores
  de qualquer tipo de dado.

  OBS: É possível ADICIONAR e REMOVER propriedades
  a qualquer momento
*/

//Criando um objeto vazio
var pessoa = {}
//Criando um objeto com propriedades
var person = {
  nome: "Arthur",
  idade: "18",
  telefone: null,
  endereco: {
    logradouro: "Rua Náutico",
    numero: 112,
    bairro: "Centro"
  }
};

//Atualiza a propriedade nome
person.nome = "João";
//Atualiza a propriedade que esta dentro de outro objeto
person.endereco.numero = 15;
//Apaga uma propriedade
delete person.telefone
