//bai1 array map()
var courses = [
  {
    id:1,
    name:'ninh',
    coin:0,
    coinText:'gia'
  },
  {
    id:2,
    name:'abc',
    coin:2,
    coinText:'gia'
  },
  {
    id:3,
    name:'abc',
    coin:4,
    coinText:'gia'
  }
]
var newCourses = courses.map(function(course,index){
  return {
    id:course.id,
    name:course.name,
    coin:course.coin,
    coinText:course.coinText,
    index:index,
  }
});
console.log(newCourses);
//
var newCourses2 = courses.map(function(course,index){
  return course.name;
});
console.log(newCourses2);

//bai 2 reduce()
function coinHandler(accumulator, currentValue, currentIndex){
  return accumulator+currentValue.coin;
}
var totalCoin = courses.reduce(coinHandler,0);
console.log(totalCoin);

//bai3 includes
var title = 'Nguyen Quang Ninh';
//ktra chuoi
console.log(title.includes('Ninh'));

//bai4 math object
// Math.PI
// Math.round
// Math.ceil
// Math.min
// Math.max

//bai 4 callback
function myCallBack(value){
  console.log('value:',value);
}
function myFunction(value){
  value('js');
}
myFunction(myCallBack);
//
Array.prototype.map2 = function(callBack){
  for(i=0;i<this.length;i++){
    callBack(i,this[i]);
  }
}
var array = [
  'php',
  'js',
  'html'
]
array.map2(function(key,index){
  console.log(key,index);
});