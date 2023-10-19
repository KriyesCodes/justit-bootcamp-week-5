// Thursday, 19th of October 2023
// extension: Create a live digital clock (hh:mm:ss)

let date1 = new Date(2023, 9, 19);
console.log(`${date1.toLocaleDateString('en-EN', { weekday: 'long' })}, ${date1.getDate()}th of ${date1.toLocaleDateString('en-EN', { month: 'long' })} ${date1.getFullYear()}`);



