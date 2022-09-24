//Variáveis Compostas - Curso JavaScript #15
let num =[1,3,4,2] 
num [4] = 5
num.push(6) //método interno para adicionar um numero em um array/vetor - colocar no final
num.length //atributo - serve para contar os elementos mum array

console.log(`nosso vetor é ${num}`)
num.sort() //colocar os elementos em ordem crescente
console.log(`nosso vetor é ${num}`)
console.log(`O primeiro elemento = ${num[0]}`)
console.log(`Mostrando isoladamente = ${num[3]}`)
console.log(`O vetor tem ${num.length} posições`)

for(var pos =0; pos < num.length ; pos++){ //método para escrever sem a formatação do vetor = percurso para exibição do vetor
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
console.log('-----OUTRO MÉTODO -----')
for (var pos in num) //método mais simples ainda para exibição
{
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)

}

num.indexOf(3) //buscar valor dentro de um vetor - retorna a posição em que o valor se encontra
console.log(num.indexOf(3))
console.log(num.indexOf(9)) // retorna -1 caso não exista o valor solicitado
var posição = num.indexOf(5)
if (posição ==-1){
    console.log(`O valor não foi encontrado`)
} else{
    console.log(`O valor esta na posição ${posição}`)
}