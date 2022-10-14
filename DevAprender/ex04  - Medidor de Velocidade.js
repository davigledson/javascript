function verificarvelocidade(velocidade){
    const velocidademaxima =70
    const km_por_pontos = 5
    
    if (velocidade <= velocidademaxima){
        return 'OK'
    } else{
        
        //para cada 5 km equivale a 1 ponto na carteira
        //floor = arrendonda para baixo
        const calculo = Math.floor((velocidade-velocidademaxima)/km_por_pontos)
        if(calculo>=12){
            return `Carteira Suspensa limite máximo de 12 pontos atingidos: pontos recebidos: ${calculo}`
        }
        return `Você receberá ${calculo} pontos na carteira`
    }
}

console.log(verificarvelocidade(1300))