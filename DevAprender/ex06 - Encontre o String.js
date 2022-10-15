function exibirpropiedades(obj){
 
    for (prop in obj){
        if(typeof(obj[prop]) ==='string'){
            console.log(prop)
        }
    }
}

const filme = {
    titulo:"vingadores",
    ano:2018,
    diretor:"Robin",
    personagem:"Thor"
}

exibirpropiedades(filme)