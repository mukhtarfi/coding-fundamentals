function calculateAge(date) {
    // split and convert into string
    var dateFormat = date.split("/")

    // set variable for birthday Date
    var d1 = dateFormat[0];
    var m1 = dateFormat[1];
    var y1 = dateFormat[2];

    // set current date
    var currentDate = new Date();
    var d2 = currentDate.getDate();
    var m2 = currentDate.getMonth() + 1;
    var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var y2 = currentDate.getFullYear();

    // // create calculation to get user's age with criteria
    if (d1 > d2 ) {
        d2 = d2 + months[m2-1];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    // calculation user's age
    var days = d2 - d1;
    months = m2 - m1;
    var years = y2 - y1;

    // display the detail age with year, month and day
    // return (`Year : ${years} | Month : ${months} | Day : ${days}`)
}

console.log(calculateAge("20/7/2002"))
console.log(calculateAge("1/1/1979"))