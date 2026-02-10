const student={
name:"jahnavi",
age:33,
address:{
    city:"ghaziabad",
    state:"UP"
}
}
//========================================================================================
// const name=student.name;
// console.log(name,student.age);
//we can do destructuring
// const {name,age,address:{
//     city
// }}=student;
// console.log(name,age,city);
//=======================================================================================
const{name: stuname="amit",age, address:{city}}=student;//here we are changing variable name if there is no name it will take default value name as amit 

console.log(stuname,age,city);
 
function displaystu(ob)
{
    console.log(`My name is ${ob.name} and age is ${ob.age}`);

}
displaystu(student);
//for destructuring
function displaystu2({name,age})
{
    console.log(`My name is ${name} and age is ${age}`);

}
displaystu2(student);
let num=[1,2,3];
let [a=10,b=20]=num;//if there is no number then it will take a as 10 and b as 20 otherwise 1,2 
console.log(a);
console.log(b);
 let p=2;
 let q=12;
 [p,q]=[q,p];
 console.log(p);
 console.log(q);
//=========

let c=["red", "green", "yellow"]
let [a,.,b]=c;
console.log(c)