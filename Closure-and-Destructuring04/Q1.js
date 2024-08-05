function outer(){
    let count = 0;
  return function inner (){
        count++
        console.log(`Number of clicks are ${count}`)
        
   }
   
}

let clicks = outer()

clicks()
clicks()

