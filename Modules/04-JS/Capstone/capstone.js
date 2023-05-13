function missingLetter(str) {
    // start code
    for (i=0; i<str.length; i++) {
        if ((str.charCodeAt(i+1) - str.charCodeAt(i)) > 1) {
            const missingIndexLetter = str.charCodeAt(i) + 1;
            console.log(String.fromCharCode(missingIndexLetter))
        }
    } 

    return "undefined"
}


  missingLetter("abce");
  missingLetter("abcdefghjklmno");
  missingLetter("stvwx");
  missingLetter("bcdf");
  missingLetter("abcdefghijklmnopqrstuvwxyz");