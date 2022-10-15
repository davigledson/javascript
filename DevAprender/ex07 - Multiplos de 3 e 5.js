//soma multiplos de 3 e 5
function somamul37(limite){
    soma=0
    for(let c=limite;c>=1;c--){
        
        if (c%3 == 0 || c%5 == 0){
            soma+=c
        }
    }
    console.log(soma)
}
somamul37(10)