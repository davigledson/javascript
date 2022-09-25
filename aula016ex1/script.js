
    let num = document.getElementById('num')
    let res = document.getElementById('res')
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
    window.alert('Tudo ok')
   } else{
    window.alert('Valor invalido ou já encontrado na lista')
   }
}