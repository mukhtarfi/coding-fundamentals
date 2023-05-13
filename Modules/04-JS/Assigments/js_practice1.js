function reversedString(string) {
    let reversedString = ""

    for (i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

const displayReversed = reversedString("hello sigma")
console.log(displayReversed)