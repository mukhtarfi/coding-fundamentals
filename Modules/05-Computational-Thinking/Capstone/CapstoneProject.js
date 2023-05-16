// 1. create a function to receive two type of date input, function (date1, date2).
// 2. convert both dates input into time (milliseconds).
// 3. find the variance between both dates.
// 4. convert the results in days => milliseconds convert to days = 1000 * 60 * 60 * 24

function getDays(date1, date2) {
    
    var dateA = new Date(date1)
    var dateB = new Date(date2)

    const oneDay = 1000 * 60 * 60 * 24

    var varianceDay = dateB.getTime() - dateA.getTime()
    
    var dayConvert = varianceDay / oneDay

    return dayConvert
}

console.log(getDays("June 14, 2019", "June 20, 2019")) // => 6
console.log(getDays("December 29, 2018", "January 1, 2019")) // => 3 , Dates may not all be in the same month/ year
console.log(getDays("July 20, 2019", "July 30, 2019")) // => 10