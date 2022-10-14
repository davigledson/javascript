// Divisivel por 3 = Fizz
// Divisisel por 5 = Buzz
// Divisivel por 3 e 5 = fizzbuzz
// não divisivel por 3 e 5 entrada
// não é um numero = 'não é um numero'


function fizzbuzz(entrada){
        if(typeof entrada != 'number' )
            return 'Não é um numero'

        if(entrada %3 === 0 && entrada %5 === 0)
        return 'FizzBuzz'

        
        if (entrada % 3 === 0)
            return 'Fizz'     
        if (entrada % 5 === 0)
            return 'Buzz'
        
    return entrada

    

}
console.log(fizzbuzz(15))