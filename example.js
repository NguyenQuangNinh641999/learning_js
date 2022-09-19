let x = 5;
{
    let x=6
    console.log(x); //6
}
console.log(x); //5

//////

let aFunction = (x,y) => console.log(x+y);
aFunction(5,6); //11

/////

class Person{
    constructor(name){
        this.name = name;
    }
}
let person = new Person('Ninh');
console.log(person.name); //ninh

/////

let obj = {
    name:'abc',
    age:12
}
let {name,age} = obj;
console.log(name); // abc
console.log(age);  //12