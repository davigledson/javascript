

function tabuada(){
    var res = document.getElementById('res')
    var num = document.getElementById('num')
    
    n = Number(num.value)

    var seltab = document.getElementById('seltab')

    if (num.value.length ==0){
        res.style.color ='red'
        res.innerHTML ='ERRO! Impossivel contar!'
    } else{
        res.innerHTML =`Tabuada de ${n} <br>`
        seltab.innerHTML =''
        for(c = 1;c <= 10; c++){
            
            mul = n * c
            res.innerHTML += ` ${n} x ${c} = ${mul} <br> `
            var item =document.createElement('option')
            item.text = ` ${n} x ${c} = ${mul}`
            item.value =`tab${c}`
            seltab.appendChild(item)
        }
        
    }
    
    
}