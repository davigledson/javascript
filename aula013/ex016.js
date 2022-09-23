//Repetições (Parte 1) - Curso JavaScript #13
//while = estrutura de repetição com teste no inicio
console.log('Tudo bem')
var c = 1
console.log(` ----- while ----- `)
while (c<=5){
    console.log(`${c}° Tudo bem!`)
    c+=1 //ou c++
}

console.log(` ----- do while ----- `)
// do while = estrutura com repetição com teste no final
var d =1
do{
    console.log(`${d}° Olá`)
    d+=1  //ou d++
} while(d<=5)