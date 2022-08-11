module.exports = function toReadable (number) {
    let single_number = ["zero", "one", "two", "three","four", "five", "six", "seven","eight", "nine"];
    let two_number = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen","nineteen"]; 
    let multiple_number = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let power_number = ["hundred"];
    let rezult = '';
    if (number < 10) {
        rezult = single_number[number];
        return rezult;
    }

    if (number > 9 && number < 20) {
        rezult = two_number[number%10];
        return rezult;
    }

    if (number > 19 && number < 100 && number%10 === 0) {
        rezult = multiple_number[number/10];
        return rezult;
    }
    if (number > 19 && number < 100 && number%10 !== 0) {
        rezult = `${multiple_number[Math.trunc(number/10)]} ${single_number[number%10]}`;
        return rezult;
    }

    if (number > 99 && number < 999 && number%100 === 0) {
        rezult = `${single_number[number/100]} ${power_number[0]}`;
        return rezult;
    }
    if (number > 99 && number < 999 && number%100 !== 0 && number%100 <= 9) {
        rezult = `${single_number[Math.trunc(number/100)]} ${power_number[0]} ${single_number[number%100]}`;
        return rezult;
    }
    if (number > 99 && number < 999 && number%100 !== 0 && number%100 > 9 && number%100 < 20) {
        rezult = `${single_number[Math.trunc(number/100)]} ${power_number[0]} ${two_number[(number%100)%10]}`;
        return rezult;
    }
    if (number > 99 && number < 999 && number%100 !== 0 && number%10 === 0) {
        rezult = `${single_number[Math.trunc(number/100)]} ${power_number[0]} ${multiple_number[(number%100)/10]}`;
        return rezult;
    }
    if (number > 99 && number <= 999 && number%100 !== 0 && number%10 !== 0) {
        rezult = `${single_number[Math.trunc(number/100)]} ${power_number[0]} ${multiple_number[Math.trunc((number%100)/10)]} ${single_number[(number%100)%10]}`;
        return rezult;
    }
                  
                  
}
