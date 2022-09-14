//bai 1 object
var myInfo = {
  name:'Nguyen Quang Ninh',
  address:'th',
  age:18,
  getName:function(){
    return this.name;
  }
}
//add ptu
myInfo.email='ninh.nguyen@tomosia.com';
//lay ptu
console.log(myInfo.address);
//or
console.log(myInfo['address']);
//delete ptu
delete myInfo.age;
console.log(myInfo);
console.log(myInfo.getName());

//bai2 object contructor
function User(name,age,address){
  this.name=name;
  this.age=age;
  this.address=address;
}

var user = new User('ninh',23,'th');
//add ptu
user.title='object contructor';
//or
User.prototype.className = 'F8';
console.log(user);

//bai 3 doi tuong date
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();

console.log(date);
console.log(year);
console.log(month);
console.log(day);

//bai4 for/in and for/of