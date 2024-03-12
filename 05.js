// 5. Greeting Promise
function createGreetingPromise(name) {
     return new Promise((resolve, reject) => {
         if (name) {
             resolve(`Hello, ${name}!`);
         } else {
             reject("Name is required.");
         }
     });
 }
 
 // Example usage:
 createGreetingPromise("Mithun")
     .then(greeting => console.log(greeting))
     .catch(error => console.error(error));