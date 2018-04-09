var somePromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('TIMED OUT!')
    },300)
})

somePromise.then((res)=>{
    console.log(res)
},(error)=>{
    console.log(error)
})