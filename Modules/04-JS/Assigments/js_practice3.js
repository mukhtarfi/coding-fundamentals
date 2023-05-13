function checkXO(string) {
    let lowercaseString = string.toLowerCase()
    let xCount = 0
    let oCount = 0

    for (let character of lowercaseString) {
        if (character === 'x') {
            xCount++
        } else if (character === 'o') {
            oCount++
        }
    }
    return xCount === oCount + console.log('x: ' + xCount + ', ' + 'o: ' + oCount)
}

console.log(checkXO("xooxx"))