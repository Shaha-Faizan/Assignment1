function sumasync(num1,num2,callback){
    setTimeout(()=>{
        const sum = num1+num2;
        callback(sum)
    },1000)
}

sumasync(8,16,(sum)=>{
    console.log(`sum is ${sum}`)
})


