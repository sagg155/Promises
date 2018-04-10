var somePromise = new Promise((resolve,reject)=>{
    // setTimeout(()=>{
        resolve('PROMISE VALUE')

})

somePromise.then(console.log,null)

console.log('MAIN PROGRAM')