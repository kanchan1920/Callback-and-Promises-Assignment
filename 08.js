// 8. Get Data from API and Display it on the browser console
async function fetchDataAndDisplay() {
     try {
         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
         const data = await response.json();
         console.log(data);
     } catch (error) {
         console.error("Error fetching data:", error);
     }
 }
 
 // Example usage:
 fetchDataAndDisplay();