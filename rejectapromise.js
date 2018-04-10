var somePromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error('REJECTED!'))
    },300)
})

// somePromise.then((res)=>{
//     console.log(res)
// },(error)=>{
//     console.log(error)
// })

function reject(error){
    console.log(error.message)
}

somePromise.then(null,reject)