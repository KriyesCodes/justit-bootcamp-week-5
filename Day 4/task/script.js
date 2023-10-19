/*
Create a function that will be called 10 times
After it is called 10 times, stop calling the method and display
a message "the call of function is cancelled"
extension:
call a second function 10 times as soon as previous calling is finished
*/

let funcCalls = 0;

function tenTimesFirst() {
  funcCalls++;
  console.log('first function run');
  if (funcCalls === 10) {
    clearInterval(firstFuncInterval);
    console.log('first function calls cancelled');
    funcCalls = 0;
    secondFuncInterval = setInterval(tenTimesSecond, 200);
  }
}

function tenTimesSecond() {
  funcCalls++;
  console.log('second function run');
  if (funcCalls === 10) {
    clearInterval(secondFuncInterval);
    console.log('second function calls cancelled');
    funcCalls = 0;
  }
}

let firstFuncInterval = setInterval(tenTimesFirst, 200);
let secondFuncInterval;
