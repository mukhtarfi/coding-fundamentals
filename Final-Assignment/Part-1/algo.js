// Question 1
function reverseString(arr) {
    // Split the array using split() method to return a new array
    let splitString = arr.split('')

    // reverse the array using reverse() method
    let reverse = splitString.reverse()

    //  combine back the elemenet of the array using join() method into a string
    let returnBack = reverse.join('')

    // return the reversed string
    return returnBack
}

console.log(reverseString('abcde'))
console.log(reverseString('hello'))
console.log(reverseString('Greetings from The Hacker Collective'))


// Question 2
function sameBackAndForth(arr) {
    // split the string into new array using split() method
    let splitString = arr.split('')

    // separate the array into 2 group using slice() method
    const newStringOne = splitString.slice(0, (splitString.length/2))
    const newStringTwo = splitString.slice((splitString.length/2))
    
    // reverse the back array using reverse() method
    const reverseBackString = newStringTwo.reverse()
    
    // join back the array into a new string
    const frontString = newStringOne.join()
    const backString = reverseBackString.join()

    // make a comparison
    if (frontString === backString) {
        // if same, then result is true
        console.log('True')
    } else {
        // if not same, then result is false
        console.log('False')
    }
}

console.log(sameBackAndForth('abba'))
console.log(sameBackAndForth('abcdefg'))


// Question 3
function reverseInt(num) {
    // get the number sign : positive or negative value
    const numSign = Math.sign(num)

    // change num into string
    const stringNum = num.toString()
    
    // split into array
    const splitNum = stringNum.split('')
    
    // reverse the array
    const reverseArray = splitNum.reverse()

    // join back the array into string
    const joinNum = reverseArray.join('')

    // parse the string back into number
    const parseTheString = parseInt(joinNum)

    // combine the sign and the number
    const reverseNum = numSign * parseTheString

    return reverseNum    
}

console.log(reverseInt(15))
console.log(reverseInt(981))
console.log(reverseInt(500))
console.log(reverseInt(-15))
console.log(reverseInt(-90))


// Question 4
function sumArr(sum) {
    let totalSum = 0

    for (i=0; i<sum.length; i++) {
        totalSum += sum[i]
    }

    return totalSum
}

console.log(sumArr([1,2,3,4,5]))
console.log(sumArr([1000,2000,44,55,22]))
console.log(sumArr([123,456,789]))


// Question 5
function deafGrandma(yell) {
    // make all words in UPPERCASE
    let uppercaseYell = yell.toUpperCase()

    // split the string into array
    let splitYell = uppercaseYell.split(' ')

    // add !! to every words in array
    splitYell.forEach((item, index, arr) => {
        arr[index] = item + "!!"
    })

    let joinYell = splitYell.join(' ')

    return joinYell
}

console.log(deafGrandma("I have a bad feeling about this"))


// Question 6
function whatIsMissing(str) {
    for (i=0; i<str.length; i++) {
        if (str.charCodeAt(i+1) - str.charCodeAt(i) > 1) {
            const missingWord = str.charCodeAt(i) + 1
            return String.fromCharCode(missingWord)
        }
    }

    return undefined
}

console.log(whatIsMissing("abcdefghijklmnopqrstuvwxyz"))
console.log(whatIsMissing("bcdf"))
console.log(whatIsMissing("abcdefghjklmno"))


// Question 7
function swap(words, search, replace) {
    // look for the searching words index number in the string
    const searchIndex = words.indexOf(search)

    // get the first letter of search words and keep in two type of variable
    const getVerb = words.charAt(searchIndex)
    const getVerb2 = words.charAt(searchIndex)

    // make front letter from 1 variable into uppercase
    const upperCaseCompare = getVerb2.toUpperCase()

    // declare a global variable
    let joinLetter

    // make comparison between front letter from both variable
    if (getVerb === upperCaseCompare) {
        // if both is uppercase, make the replace words also has same type of uppercase at front letter
        const searchFrontLetter = replace.charAt(0)
        const balanceLetter = replace.slice(1)
        const changetoUpperCase = searchFrontLetter.toUpperCase()
        joinLetter = changetoUpperCase + balanceLetter
    } else {
        // if both not same, then use the original replace words
        joinLetter = replace
    }

    // swap the search word with the new replace word
    const newVerb = words.replace(search, joinLetter)

    return newVerb
}

console.log(swap("His name is Tom", "Tom", "john"))
console.log(swap("Let us get back to more Coding", "Coding", "algorithms"))
console.log(swap("This has a spellngi error", "spellngi", "spelling"))