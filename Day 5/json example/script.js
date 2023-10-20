// JSON - JavaScript Object Notation

// Test based data-transfer format

// Similar to objects in JS

// Differences:

// Works in key/value pairs - both wrapped in double quotes
// Cannot contain functions (methods)
// Popular method of transferring data - commonly used by APIs
// Can be created and interpreted by other languages

let JSONObj = {
  "firstName": "Christian",
  "age": 31,
  "married": false
}

let JSONArray = ["Red", "Green", "Blue"];

let JSONNested = [{ "name": "James", "age": 35 }, { "name": "Hannah", "age": 30 }];

let JSONString = `{
  "people":[
    {"firstName":"David", "lastName":"Smith"},
    {"firstName":"John", "lastName": "Doe"}
  ]
}`;

// parse = Taking a JSON string and converting it to a useable JavaScript Object

// stringify -Taking a JSON object and converting it to a string - for external use / se

const JSONObject = JSON.parse(JSONString);
console.log(JSONObject);