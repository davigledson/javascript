function exibirtipo(limite){
    for(let c=limite;c>=0;c--)
    if (c%2==1){
        console.log(`${c} = IMPAR`)
    } else(console.log(`${c} = PAR`))

}

exibirtipo('6')