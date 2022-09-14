//bai1 Dom
//co 3 thanh phan element,attribute,text
console.log(document);
document.write('Hello');
//
var heading = document.getElementById('heading');
console.log(heading);
//
var classHeading = document.getElementsByClassName('heading');
console.log(classHeading);
//
var tagName = document.getElementsByTagName('h2');
console.log(tagName);
//
var selector = document.querySelector('.box');
console.log(selector);
//
var selectorAll = document.querySelectorAll('.box');
console.log(selectorAll);
//
console.log(document.forms);
// console.log(document.images);

//
var listLi = document.querySelectorAll('.box2 li');
console.log(listLi);