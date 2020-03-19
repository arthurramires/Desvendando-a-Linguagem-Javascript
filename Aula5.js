//Aula 5 - Undefined e Null

/*
  Undefined é retornado caso uma propriedade
  de um determinado objeto seja consultada e não exista
*/
//Criando um objeto
var pessoa = {}
pessoa.idade;//Undefined

/*
  Null é retornado quando uma propriedade existe
  porém o valor é vazio, está ausente
*/
var pessoa = {
  nome: "Arthur",
  idade: 18,
  curso: null,
}
pessoa.curso;//null
