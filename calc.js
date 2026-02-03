// function calculator(){
//  const add=(a,b)=>
//     {
//         return a+b;
//     }
//  const sub=(a,b)=>
//  {
//     return a-b;
//  }
//  const mul=(a,b)=>
//  {
//     return a*b;
//  }
//  const div=(a,b)=>
//  {
//     return a/b;
//  }
// };
//  console.log(calculator.add(1,2));
//  console.log(calculator.sub(2,4));
//  console.log(calculator.mul(2,3));
//  console.log(calculator.div(2,3));

   
const calculator=()=>
({
    add:(a,b)=>a+b,
    sub:(a,b)=>a-b,
    mul:(a,b)=>a*b,
    div:(a,b)=>(b===0? "error":a/b),
});
console.log(calculator().add(2,3));
console.log(calculator().sub(1,2));
console.log(calculator().mul(1,2));
console.log(calculator().div(1,2));
