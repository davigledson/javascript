/* O que estudar no futuro
-HTML E CSS
-Functions
-elo function
-callbacks
-funções anônimas
-IIFE
-orientação a objetos
-modularização
-regEx(expressões regulares)
-Json
-AJAX
-NodeJs
-bibliotecas e frameworks(Jquery, vue,js, angular[...])*/


//Objeto

let amigo ={nome:"davi",
idade:19,
sexo:"m",
maior_menor(ida=0){if(ida>=18){return"maior"}else{return "menor"}} //dar para colocar funções dentro de variáveis

}
console.log(typeof(amigo))
console.log(amigo["nome"]) //assim
console.log(amigo.idade) //ou assim
console.log(amigo.maior_menor(19))//executando a função

console.log(`${amigo.nome} tem ${amigo.idade} anos e é ${amigo.maior_menor(amigo.idade)} de idade`)