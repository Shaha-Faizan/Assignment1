function multiplyWithCallback(arr,callback){
    const multiplyarr = arr.map((num)=> num*2)
    callback(multiplyarr)
}

function callback(result){
    console.log(result)
}
multiplyWithCallback([2,4,8,10],callback)
