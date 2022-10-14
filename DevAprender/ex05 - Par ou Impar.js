function exibirtipo(numero){
    for(let c=numero;c>=0;c--)
    if (c%2==1){
        console.log(`${c} = IMPAR`)
    } else(console.log(`${c} = PAR`))

}

exibirtipo('6')