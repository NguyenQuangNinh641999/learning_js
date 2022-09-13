// bai1 chuoi
//length
var string = 'Nguyen Quang Ninh';
console.log(string.length);
console.log(`toi la: ${string}`);
// find index
console.log(string.indexOf('Ninh'));
console.log(string.indexOf('Ninh',4));
//or
console.log(string.search('Ninh'));
//cut string
console.log(string.slice(3));
//replace
console.log(string.replace('Ninh','K'));
console.log(string.replace(/Ninh/g,'K'));
//conver to upper case
console.log(string.toLocaleUpperCase());
//conver to lower case
console.log(string.toLocaleLowerCase());
//trim
console.log(string.trim());
//split
console.log(string.split(' '))
//get a character by index
console.log(string.charAt(2));
console.log(string[2]);

//bai2 lm vc vs so
var so = 1.234;
console.log(so.toFixed(2));

//bai3 array
var myArray = [
    'php',
    'js',
    'reactjs'
];
//length
console.log(myArray.length);
//lay ptu theo index
console.log(myArray[1]);
//tostring
console.log(myArray.toString());
//join
console.log(myArray.join('-'));
//pop
console.log(myArray.pop());
console.log(myArray);
//push
console.log(myArray.push('ruby','laravel'));
console.log(myArray);
//shift
console.log(myArray.shift());
console.log(myArray);
//unshift
console.log(myArray.unshift('php'));
console.log(myArray);
//splice
myArray.splice(1,2,'Dart','java');
console.log(myArray);
//concat
var myArray2 = [
    'K'
];
console.log(myArray.concat(myArray2));

//bai3 ham
function myFunction(){
    console.log('Hello function');
}
myFunction();

//bai4 tham so trong ham

function witeLog(){
    for(var param of arguments){
        console.log(param);
    }
}
witeLog('log1','log2','log3');