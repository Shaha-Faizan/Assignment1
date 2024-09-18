async function fetchData(){
let result = await fetch('https://jsonplaceholder.typicode.com/todos/1')  // fetching data from URL
let data = await result.json()
return data
}

fetchData()
.then((data)=>{
    console.log(data)
})