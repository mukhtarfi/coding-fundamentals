// sum([1, 2, 3, 4]) // output: 10
// sum([-3, 5, 19, -6]) // output: 15

// const arraySum = [-3,5,19,-6]
//     let totalSum = 0

//     for (i=0; i<arraySum.length; i++) {
//         totalSum = totalSum + arraySum[i]
//         console.log(totalSum)

//     }

function sum(array) {
    let totalSum = 0;

    for (i=0; i<array.length; i++) {
        totalSum = totalSum + array[i];
    }
    console.log(totalSum)
}

sum([1,2,3,4])
sum([-3,5,19,-6])