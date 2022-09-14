//bai1 JSON
var json1 = '["js","php"]';
var json2= '{"name":"k","age":1}';
// chuyen json sang js
console.log(JSON.parse(json1));
console.log(JSON.stringify(json1));


//bai2 Promise
// sync / async

var promise = new Promise(
  function(resolve, reject){
    //thanh cong: resolve
    //that bai: reject
    resolve();
  }
);
promise
      .then(function(){
        return 'success';
      })
      .then(function(data){
        console.log(data);
        return 'success2';
      })
      .then(function(data){
        console.log(data);
      })
      .catch(function(){
        console.log('fail');
      })
      .finally(function(){
        console.log('done');
      })

//
function sleep(ms){
  return new Promise(function(resolve){
    setTimeout(resolve,ms);
  })
}

sleep(1000)
    .then(function(){
      console.log(1);
      return sleep(1000);
    })
    .then(function(){
      console.log(2);
      return sleep(1000);
    })