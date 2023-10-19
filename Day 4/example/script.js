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