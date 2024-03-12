// 7. Multiple requests
async function fetchMultipleData() {
     try {
         const [todoResponse, postResponse] = await Promise.all([
             fetch("https://jsonplaceholder.typicode.com/todos/1"),
             fetch("https://jsonplaceholder.typicode.com/posts/1")
         ]);
 
         const todoData = await todoResponse.json();
         const postData = await postResponse.json();
 
         const result = { todo: todoData, post: postData };
         console.log(result);
     } catch (error) {
         console.error("Error fetching data:", error);
     }
 }
 
 // Example usage:
 fetchMultipleData();