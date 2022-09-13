//bai 1
var hello = 'Hello';
console.log(hello);

//bai 2
// 1. alert
// 2. console
// 3. confirm
// 4. prompt
// 5. setTimeout
// 6. setInterval
alert(hello);
// confirm(hello);
// prompt(hello);
// setTimeout(function(){
//     console.log(hello);
// },1000)

// setInterval(function(){
//     console.log(hello);
// },1000)

//bai 3
var so1 = 1;
var so2 = 2;
var tong = so1 + so2;
console.log('tong: ' + tong);

if(so1 < so2){
    console.log('dung');
}

//bai4
// toan tu ++ --

// bai5 toan tu gan
console.log(so1+=so2);

//bai 6
var boolean = so1<so2
console.log(boolean);

//bai7 kieu du lieu
//string
//number
//boolean
//underfuned
var abc;
//null
var abc=null;
//symbol
var abc = Symbol('id')//unique
//function
var myFunction = function(){
    alert('myfunction');
}
myFunction();
//objects
var myObject = {
    name: 'Ninh',
    age: 123,
    myFunction: function(){

    }
};
console.log(myObject);
//array
var myArray = [
    'js',
    'php',
    'reactjs'
];
console.log(myArray);