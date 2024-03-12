// 9. Error Handling
async function fetchDataWithErrorHandling() {
     try {
         const response = await fetch("https://jsonplaceholder.typicode.com/posts/123456789");
         const data = await response.json();
         console.log(data);
     } catch (error) {
         console.error("Error fetching data:", error);
     }
 }
 
 // Example usage:
 fetchDataWithErrorHandling();