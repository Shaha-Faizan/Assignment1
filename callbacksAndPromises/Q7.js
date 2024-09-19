
 function fetchmultidata(urls){
    const promises =  urls.map((url)=>{
       return fetch(url)
        .then((response)=> response.json())
    });
return Promise.all(promises)
}

const urls = ["https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/todos/2",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4",
]

fetchmultidata(urls)
.then((data)=> console.log(data))

