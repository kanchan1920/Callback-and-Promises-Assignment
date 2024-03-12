// 3. Age in Days
function ageInDays(person) {
     const { firstName, lastName, age } = person;
     const fullName = `${firstName} ${lastName}`;
     const ageInDays = age * 365;
 
     function logAge() {
         console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
     }
 
     return logAge;
 }
 
 // Example usage:
 const personInfo = { firstName: "John", lastName: "Doe", age: 25 };
 const logAgeFunc = ageInDays(personInfo);
 logAgeFunc();