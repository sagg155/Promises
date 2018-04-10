var somePromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('FULFILLED!')
    },300)
})

somePromise.then((res)=>{
    console.log(res)
},(error)=>{
    console.log(error)
})