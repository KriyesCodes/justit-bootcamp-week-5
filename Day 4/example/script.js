// setTimeout() - execute a block of code once after some time delay
// clearTimeout()

function log(name) {
  console.log(name);
}

let timeOut = setTimeout(log, 3000, "Rick3000");

// to stop it from happening
// clearTimeout(timeOut);

let four = setTimeout(log, 4000, "Rick4000");
let five = setTimeout(log, 5000, 'Rick5000');
clearTimeout(four);


// setInterval()
// call a block of code repeatedly after some time delay
// clearInterval()

let repeat3 = setInterval(log, 3000, "repeat three");

// to stop the above
clearInterval(repeat3);


// Date in JS

let date = new Date();
console.log(date);
// let date1 = new Date(year, month, day, hour, minutes, seconds, milliseconds);
// the first two we should pass
let date2 = new Date(2023, 14, 19); //months indexed from 0, and value is converted with %12 so 14 becomes 2 which is March
console.log(date2);

let date3 = new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' });
console.log(date3);

// toLocalDateString()

let localDate = date.toLocaleDateString();
console.log(localDate);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getSeconds());
console.log(date.getTime()); //return time in milliseconds

date.setMonth(11);
date.setFullYear(2025);
console.log(date);