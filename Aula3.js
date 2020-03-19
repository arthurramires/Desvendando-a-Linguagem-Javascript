//Aula 3 - Strings

var nome = "AgileCode"

//Caracter na posicao 2
nome.charAt(2);//"i"
//Código da tabela UniCode do caracter presente na posicao 0
nome.charCodeAt(0);//65
//Extrai uma parte da String
nome.substring(0, 5);//Agile
//Concatenar a palavra com uma nova String e retornado uma nova
nome.concat("!");//"AgileCode!"
//Retorna posicao do caracter presente na funcao
nome.indexOf('e');//4
//Retorna a palavra substituindo pela sentença escolhida
nome.replace('Code', '!');//"Agile!"
//Quebra a String na posicao 'e'
nome.split('e');//['Agil', 'Cod', ''];
