//Funções - Curso JavaScript #16

function parimpar (n){
    if(n%2 ==0){
       return 'Par!'
    } else{
        return 'Impar!'
    }
}
var res = parimpar(4) //chamando a função
console.log(res)
console.log(parimpar(7)) //parimpar = chamada    7 = parâmetro

//NaN = Not a Number
function soma(n1=0,n2=0){
    return n1 + n2
}

console.log(soma(5,8))

var v = function(x){ //passando para uma variável uma função
    return x*2
}
console.log(v(5))

function fatorial(n){
    fat=1
    for(var c=n;c>1;c--){
        fat*=c

    }
    return fat
}
console.log(fatorial(5))

// uso de função usando RECURSIVIDADE = função dentro de outra

 function fatorial2(n) {
        if(n==1){
            return 1
        } else{
            return n * fatorial(n-1)
        }
}
    console.log(fatorial2(5))
