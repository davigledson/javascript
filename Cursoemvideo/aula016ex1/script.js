
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    let fim = document.getElementById('fim')
    let valores = []

    function isnumero(n){

        if (Number(n) >=1 && Number(n) <= 100){
            return true
        } else{
            return false
        }
    }
    function inlista(n, lista){
        if (lista.indexOf(Number(n)) != -1){
            return true
        } else{
            return false
        }

    }



    function adicionar(){
   if (isnumero(num.value) && !inlista(num.value, valores)){ //!inlista = NÃO EM LISTA
    valores.push(Number(num.value))
    res.innerHTML =''
    for (var pos in valores){
        
        res.innerHTML +=`${valores[pos]} Adicionado na lista <br>`
    }
    fim.innerHTML =''
   } else{
    window.alert('Valor invalido ou já encontrado na lista')
   }
   num.value ='' // apaga o numero quando clica = cursor voltar a pisca
   num.focus() // apaga o numero quando clica = cursor voltar a pisca
}

function finalizar(){
    if (valores.length ==0){
        window.alert('Adicione valores')
    } else{
        let total =valores.length
          //Pode-se usar os métodos do próprio ecmaScript que já nos fornecem o maior ou menor valor, Math.min.apply(Math,vetor) e Math.max.apply(Math,vetor), onde em "vetor" colocamos o nome do vetor criado, sem os [ ]. Estes métodos retornaram o menor ou maior valor.
        let maior =Math.max.apply(Math,valores)
        let menor =Math.min.apply(Math,valores)
        let soma =0
        let media = 0
        for (let pos in valores){
            soma+=valores[pos]
            
        }
        media = soma / valores.length
        fim.innerHTML =''
        fim.innerHTML+=`<p>lista de números = ${valores}</p> `
        fim.innerHTML+= `<p>Ao todo, temos ${total} números cadastrados</p> `
        fim.innerHTML +=`<p>Maior numero = ${maior}  Menor numero = ${menor} </p>`
        fim.innerHTML +=`<p>A soma dos valores foi ${soma}</p>`
        fim.innerHTML += `<p>A media dos valores foi ${media}</p>`
    }
}
