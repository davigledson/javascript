//Condições (Parte 2) - Curso JavaScript #12
var agora = new Date()
var diasem = agora.getDay()
/*
 0 - Domingo
 1 - Segunda
 2 - Terça
 3 - Quarta
 4 - Quinta
 5 - Sexta
 6 - Sábado

*/ 

console.log(diasem)
switch(diasem){ //switch = estrutura múltipla = importante para testa dados pontuais = não pode entre valores entre 0 e 5 por exemplo
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('ERRO! Dia invalidado!')
        break
}