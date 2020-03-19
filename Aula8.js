//Aula 8 - Functions - Parte 2

//Encapsulamento
var createCounter = function (){
  var value = 0;
  return {
    add: function(){
      return ++value;
    }
  };
};

var counter = createCounter();
console.log(counter.add())
