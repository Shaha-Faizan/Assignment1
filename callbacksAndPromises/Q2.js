function getData(){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve("deta fetch Succesfully ")
},2000)
    })
}

getData()
.then((data)=>{
    console.log(data)
})