function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length ==0 || fano.value>ano){
        alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero =''

        var img =document.createElement('img') //Forma de pega uma imagem no JavaScript
        img.setAttribute('id','foto')

        

        if (fsex[0].checked){
            genero ='Homem'
            if (idade>=0 && idade<10){
                //criança
                img.setAttribute('src','foto_beber_homem.jpg')
            } else if (idade<21){
                img.setAttribute('src','foto_jovem_homem.jpg')
                //Jovem
            } else if(idade<50){
                //adulto
                img.setAttribute('src','foto_adulto_homem.jpg')
            } else{
                //idoso
                img.setAttribute('src','foto_idoso_homem.jpg')
            }
        } else if(fsex[1].checked){
            genero ='Mulher'
            if (idade>=0 && idade<10){
                //criança
                img.setAttribute('src','foto_beber_mulher.jpg')
                
            } else if (idade<21){
                //Jovem
                img.setAttribute('src','foto_jovem_mulher.jpg')
            } else if(idade<50){
                //adulto
                img.setAttribute('src','foto_adulto_mulher.jpg')
            } else{
                //idoso
                img.setAttribute('src','foto_idoso_mulher.jpg')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML =`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}