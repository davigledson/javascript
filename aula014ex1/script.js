

function contar(){
    var inicio = document.getElementById('inicio')
var fim = document.getElementById('fim')
var passo = document.getElementById('passo')
var res = document.getElementById("res")
 //NÃO EXECUTE O res.inner sem ter uma função arquitetada SENÂO SÓ VAI DAR DORE DE CABEÇA

if(inicio.value.length ==0 || fim.value.length ==0 || passo.value.length ==0) {
    res.innerHTML ='Impossível contar!'
    
    
} else{
    res.innerHTML ='CONTANDO: <br>'
    i = Number(inicio.value) //NÃO ESQUEÇA DO NUMBER MSM O QUE INPUT SEJA DO TIPO NUMBER
    f = Number(fim.value)
    p= Number(passo.value)
    if(p<=0){
        alert('Passo invalido! COnsiderando PASSO 1')
        p = 1
    }
    
    if (i < f){ //Contagem crescente
        for(var c = i;c <= f ;c += p){
        res.innerHTML += `${c} \u{1F449}`
    }
     //código de emoji só funcionar entre crases
    } else{ //Contagem regressiva
        for (var c = i;c >= f;c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
}

}
 

