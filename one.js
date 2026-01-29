(function show1()
{
    console.log("hello there");
})();
//immediately invoked function

//========================================extra info
//before assignmeent error will be called as hoisting
//========================================

const show2=()=> {
    console.log("arrow");
};
show2();
(()=> {
    console.log("wellcome to arrow func");
})();

function person()
{
    this.age=25;
    setTimeout(function(){
        console.log(this.age);
    },1000);
}
new person();
function person2()
{
    this.age=23;
    setTimeout(()=> {
        console.log(this.age)
    },1000);
}
new person2();