// javascript objeto endereço
let endereço={
    rua:"Sitio São Raimundo",
    cidade:"Baraúna",
    CEP:"59695-000"
}



function exibirendereço(endereço){
    for(chave in endereço){
    console.log(chave,endereço[chave])
}
}

exibirendereço(endereço)