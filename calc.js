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
//({
// yahan jo likha hai, woh OBJECT ke andar hai
//})
//we can't write const inside the oject

const calculator1=()=>({
add:(a1,b1)=>{
    return a1+b1;
},
sub:(a2,b2)=>{
    return a2-b2;
},
mult:(a,b)=>{
    return a*b;
},
div:(a,b)=>{
    return a/b;
},
});
console.log(calculator1().add(2,3));
console.log(calculator1().mult(2,3));
console.log(calculator1().div(2,3));
//switch case
const calculator2 = (a, b, operation) => {
    switch (operation) {
        case "add":
            return a + b;

        case "sub":
            return a - b;

        case "mul":
            return a * b;

        case "div":
            return b === 0 ? "error" : a / b;

        default:
            return "Invalid operation";
    }
};

// usage
console.log(calculator2(2, 3, "add"));
console.log(calculator2(1, 2, "sub"));
console.log(calculator2(1, 2, "mul"));
console.log(calculator2(1, 2, "div"));
