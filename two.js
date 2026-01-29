console.log("hello");
const a=11;
console.log(a);
// console.log(window);
function hello()
{
    if(true)
    {
        var x=10;
        console.log("inner",x);
    }
 
   console.log("outer",x);

}
hello();
//var is function scoped 
const ar=[1,2,3,4];//reasssignment not allowed modification alloowed
ar.push(5);
console.log(ar);
//sloppy mode
//tdz eror