function carregar(){
    var msm =window.document.getElementById('msm')
    var img = document.getElementById('imagem')
    var data =new Date()
    var hora = data.getHours()
    
    
    msm.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora <12){
        //BOM DIA
        img.src ='foto_dia.jpg'
        document.body.style.background ='lightblue'
        
    } else if(hora>=12 && hora<18){
        //BOA TARDE
        img.src ='foto_tarde.jpg'
        document.body.style.background ='lightsalmon'
    } else{
        //BOA NOITE
        img.src ='foto_noite.jpg'
        document.body.style.background ='lightslategray'
        
    }
    
    
}
