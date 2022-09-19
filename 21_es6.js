//bai1 
//var, let, const: scope, hosting


//bai2 arrow function
//function binh thuong
const logger = function(log){
  console.log(log);
}
logger('message...');

//arrow function
const logger2 = (log) => {
  console.log(log);
}
logger2('message2..');
//

const sum = (a,b) => a+b;
console.log(sum(2,4));
//
const logger3 = log => console.log(log);
logger3('logger3');

//bai 3 multi-line string
const nameLanguage = 'php';
const deception = `Course: ${nameLanguage}`;
console.log(deception); 

//bai3 class

class Course{
  constructor(name,price){
    this.name=name;
    this.price=price;
  }
  
  getName(){
    return this.name;
  }
}
const phpCourse = new Course('php',1000);
console.log(phpCourse);

//bai4
// 1.dinh nghia key, value cho object
// 2. dinh nghia method cho object
// 3. dinh nghia key cho object duoi dang bien
var name='js';
var price=1000;
var course = {
  name,
  price,
  getName(){
    return this.name;
  }
};
console.log(course);
//
var fieldName = 'name';
var fieldPrice = 'price';
const course2 = {
  [fieldName]:'js',
  [fieldPrice]:1000
}
console.log(course2);

//bai5 distructuring
var array = ['js','react','php'];
var a=array[0];
var b=array[1];
var c=array[2];
console.log(a,b,c);
//or
var [d,e,f]=array;
console.log(d,e,f);
//or
var [d, ,f]=array;
console.log(d,f);
//or
var [d,...rest]=array;
console.log(rest);
//
var object = {
  name:'nih',
  price:1000
}
var {name,price}=object;
console.log(name,price);
//
function arrayLog(...params){
  console.log(params);
}
arrayLog(1,2,3,4,5,6);


//bai 5 spread
//với mảng tương tự
function obj({name,price,...rest}){
  console.log(name);
  console.log(price);
}
obj({
  name:'js',
  price:1000,
});

//bai 6 
var array1 = ['js','php'];
var array2 = ['react'];
var array3 = [...array2,...array1]
console.log(array3);
//
var obj1 = {
  name:'ninh',
}
var obj2 = {
  price:1000
}
var obj3 = {
  ...obj1,
  ...obj2
}
console.log(obj3);

// bai 7 tagged template literals
function highlight(...rest){
  console.log(rest);
}
var brand = 'f8';
highlight`hoc lap trinh tai ${brand}`;


//bai 8 modules
import loggers, {TYPE_LOG} from './loggers.js';
loggers('test', TYPE_LOG);
//
import * as constants from './constants.js';
console.log(constants);