var somePromise = new Promise((resolve,reject)=>{
    // setTimeout(()=>{
        resolve('I FIRED')
        reject(new Error('I DID NOT FIRE'))
    // },300)
})

// somePromise.then((res)=>{
//     console.log(res)
// },(error)=>{
//     console.log(error)
// })

function onRejected(error){
    console.log(error.message)
}

somePromise.then((res)=>{
    console.log(res)
}, onRejected)