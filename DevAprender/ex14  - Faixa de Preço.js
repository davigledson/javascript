let faixa =[
    {tooltip:"até R$700",minimo:"0",maximo:"700"},
    {tooltip:"de R$700 a R$1000",minimo:"700",maximo:"1000"},
    {tooltip:"R$1000 ou mais",minimo:"1000",maximo:"9999"}
]



//Segunda opção (Factory function)

function criarFaixaPreço(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}
let faixa2 =[
    criarFaixaPreço('a',1,100),
    criarFaixaPreço('a',700,1000),
    criarFaixaPreço('a',100,9999)
]
//Terceira Opção (Constructor Function)
function FaixaPreço(tooltip,minimo,maximo){
    this.tooltip =tooltip
    this.minimo =minimo
    this.maximo =maximo
}

faixa3 =[
    new FaixaPreço('d',20,30),
    new FaixaPreço('e',30,40),
    new FaixaPreço('f',40,50),
]
     

console.log(faixa)
console.log(faixa2)
console.log(faixa3)