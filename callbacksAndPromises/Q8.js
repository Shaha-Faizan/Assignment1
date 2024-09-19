function racepromises(promises){
    return Promise.race(promises)
}

const firstpromise = new Promise((resolve)=>{
    setTimeout(()=>{
resolve('I am first I am resolved')
    },1000)
})

const secondpromise = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("I am second promise I am also resolved")
    },3000)
})

racepromises([firstpromise,secondpromise])
.then((result)=> console.log(result))