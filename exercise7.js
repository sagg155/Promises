// var first = function() {
//     var promise = new Promise(function(resolve, reject){
//        setTimeout(function() {
//         //   console.log('first method completed');
//           resolve({data: '123'});
//        }, 200);
//     });
//     return promise;
//  };
  
  
//  var second = function(someStuff) {
//     var promise = new Promise(function(resolve, reject){
//        setTimeout(function() {
//         //   console.log('second method completed');
//           resolve({newData: someStuff.data + ' som  e more data'});
//        }, 200);
//     });
//     return promise;
//  };

 first().then(
     second
 ).then(
     console.log
 )