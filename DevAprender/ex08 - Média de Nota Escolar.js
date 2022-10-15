


function mediadoaluno(media){
    media=caulcularmedia(media)
    if(media < 59) return 'F';
    if(media < 69) return 'D';
    if(media < 79) return 'C';
    if(media < 89) return 'B';
    return 'A'
}

function caulcularmedia(notas){
   
    let soma=0
    //SIM for of = pega os item de um array
    for(let nota of notas){
        soma+=nota       
    }
   return soma/(notas.length)
}

const notas =[60,60,60,60]

console.log(caulcularmedia(notas))
console.log(mediadoaluno(notas))