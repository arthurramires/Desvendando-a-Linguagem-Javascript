//Aula 10 - Expressões Regulares
//Definir um padrão formal Ex. Formato de email, datas, telefones
//Criando uma expressão

var regExp = /<expressão regular>/;
//Passo 1 - telefones
var regExp = /9999-9999/;
var telefone = "9999-9999";
console.log(regExp.exec(telefone));//['9999-9999', index: 0, input: '9999-9999']
//Passo 2 - Usar \ para escapar um caractere especial
var regExp = /\(48\) 9999-9999/;
var telefone = "(48) 9999-9999";
console.log(regExp.exec(telefone));
//Passo 3 - Iniciar com ^ e terminar com $
var regExp = /^\(48\) 9999-9999$/;
var telefone = "(48) 9999-9999";
//Passo 4 - Grupos de Caractere OBS: ^ indica negação
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone = "(48) 1234-3567";
//Passo 5 - Evitar a repetição dos Grupos
//Quantificadores
/*
  {n} - Quantifica um número específico
  {n, } - Quantifica um número mínimo
  {n, m} - Quantifica um número mínimo e máximo
*/
var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
var telefone = "(48) 1234-3567";
//Passo 6 - Adicionando um novo dígito no telefone
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
var telefone = "(48) 1234-3567";
//Passo 7 - Adicionando um hífen opcional no número
/* Quantificadores - Parte 2
  ? - Zero ou um
  * - Zero ou mais
  + - Um ou mais
*/
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
var telefone = "(48) 12343567";
//Passo 8
var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)<\/tr><\/table/>;
var telefone = "<table><tr><td>(48) 12343567</td><td>(70) 1234-5678</td>";
//Passo 9 - Metacaracteres
/*
  \w - representa o conjunto [a-zA-Z0-9_]
  \d - representa o conjunto [-9]
  \s - representa o espaço em branco
  \n - representa quebra de linha
*/
var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?[0-9]{4}<\/td>)<\/tr><\/table/>;
var telefone = "<table><tr><td>(48) 12343567</td><td>(70) 1234-5678</td>";
//Passo 10
//Extraindo telefones com match, split e replace
var regExp = /\(\d{2}\)\s\d{4,5}-?[0-9]{4}/>;
var telefone = "<table><tr><td>(48) 12343567</td><td>(70) 1234-5678</td>";
telefone.match();//(48) 12343567
//Passo 11 - Extraindo todos os telefones de todas as linhas
/* Modificadores
  i - Case-insensitive matching
  g - Global matching
  m - Multiline Matching
*/
var regExp = /\(\d{2}\)\s\d{4,5}-?[0-9]{4}/g>;
var telefone = "<table><tr><td>(48) 12343567</td><td>(70) 1234-5678</td>";
telefone.match();//['(48) 12343567', '(70) 1234-5678']
