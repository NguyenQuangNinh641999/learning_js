//bai 1 foreach
var courses = [
  'php',
  'js',
  'java'
]
courses.forEach(function(value,key,array){
  console.log(key,value,array);
})

//bai 2 filter
var courses2 = [
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
var filterCourses = courses2.filter(function(value,key,array){
  return value.coin>3;
})
console.log(filterCourses);

//bai3 some (true or false)
var filterCourses2 = courses2.some(function(value,key,array){
  return value.coin>3;
})
console.log(filterCourses2);

//bai 4 every
var filterCourses3 = courses2.every(function(value,key,array){
  return value.coin>3;
})
console.log(filterCourses3);

//bai5 giai thua
function giaiThua(number){
  var tich = 1;
  if(number>0){
    return tich =  number * giaiThua(number-1);
  }else{
    return tich;
  }
}
console.log(giaiThua(6));