function factorial(anyNumber){  
    // your code

    // set if the number is 0 or 1, it will return result of 1
    if (anyNumber === 0 || anyNumber === 1) {
        return 1
    }

    // set the calculation to get the result of factorial other than 0! and 1! using FOR loop
    for (i = anyNumber - 1; i > 0; i--) {
        anyNumber *= [i];
    }

    return anyNumber

}

console.log('0! = ',factorial(0)) // === 1
console.log('1! = ',factorial(1)) // === 1
console.log('5! = ',factorial(5)) // === 120
console.log('4! = ',factorial(4)) // === 24