function Endereço(rua,cidade,cep){
    this.rua =rua
    this.cidade = cidade
    this.cep = cep
  

}
let endereço1 = new Endereço ('a','b','c')
let endereço2= new Endereço ('a','b','c')
let endereço3 =endereço1

function SaoIguais(endereço1,endereço2){
    //Comparar se as propriedades de memorias são iguais
    return (endereço1.rua === endereço2.rua &&
         endereço1.cep === endereço2.cep &&
          endereço1.cidade === endereço2.cidade)
        }

console.log(SaoIguais(endereço1,endereço2))
//comparando se a referencia do objeto aponta para o msm local na memoria
function temEndereçodeMemoriaIguais(endereço1,endereço2){
return endereço1 === endereço2
}
console.log(temEndereçodeMemoriaIguais(endereço1,endereço2))
console.log(temEndereçodeMemoriaIguais(endereço1,endereço3))