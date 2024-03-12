// 2. String Manipulation
function manipulateString(str) {
     const manipulatedString = str.toUpperCase();
 
     function logString() {
         console.log(`The manipulated string is: ${manipulatedString}`);
     }
 
     return logString;
 }
 
 // Example usage:
 const logFunc = manipulateString("Hello, world!");
 logFunc();