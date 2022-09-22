//Condições (Parte 2) - Curso JavaScript #12
var agora = new Date() //pega a hora atual do pc
var hora = agora.getHours() //pega a hora atual do pc
console.log(`Agora são exatamente ${hora} horas`)
if (hora<12){
    console.log('Bom dia!')
} else if (hora <18){
    console.log('Boa tarde!')
} else {
console.log('Boa noite')
}