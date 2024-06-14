let walking = function(){
    let wasIWalking = true;
    return new Promise((resolve,reject)=>{
        if(wasIWalking === true){
            resolve("I was walking")
        }
        else{
            reject("I was NOT Walking!")
        }
    })
}
let sleeping = function(){
   console.log('I was sleeping')
}
let eating = function(){
   console.log('I was eating')
}

walking().then((response)=>console.log(response))
.catch((err)=>console.error(err))









