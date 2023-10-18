/*
create a function which will take three parameters, a string, an index and a number
It will extract the text from index
*/


function betterSubstring(string, index, lastIndex) {
  let subString = "";
  for (let i = index; i <= lastIndex; ++i) {
    subString += string[i];
  }
  return subString;
}

console.log(betterSubstring('Take this beta substring method losers', 10, 23));