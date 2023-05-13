// 1. create position a and position b
// 2. check if position a much greater than position b, then return false.
// 3. if not, then move tiles according to the dice.
// 4. tiles advance from 1 to 6. accept integer input only.
// 5. move position a according to the dice.
// 6. compare position a with position b, is it player a advance onto the same tile with player b
// 7. if yes. then both get bonus and return true.
// 8. if no, then return false.

function possibleBonus(a, b) {
    let x = a
    let y = b

    if (x > y) {
        return false;
    } else {
        for (i = 1; i <= 6; i++) {
            x += 1;
    
            if (x === y) {
                return true;
            }
        }
    }

    return false;
}

console.log(possibleBonus(3, 7))

console.log(possibleBonus(1, 9))

console.log(possibleBonus(5, 3))