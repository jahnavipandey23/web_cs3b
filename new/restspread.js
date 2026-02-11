// function add(num)
// {
//     let t=0;
//     for(i=0;i<num.length;i++)
//     {
//         t=t+num[i];
//     }
//     return t;
// }
// console.log(add[12,2,3]);
// function add(...num)
// {
//     let t=0;
//     for(i=0;i<num.length;i++)//for(int i of num)
//     {
//         t=t+num[i];
//     }
//     return t;
// }
// console.log(add(12,2,3));

// // let a=[1,2,3,4,4];
// // int [f,b,c]=a;
// // console.log(f,b,c);//o/p=1,2,3

// let a2=[1,2,3,4,4];
// let [f ,s ,...a]=a2;
// console.log(f,s,...a);//if i want to remove brackts from a

// function abc(...args)
// {
// console.log(args);
// }
// let aee[]=1,2,3

let even=(a)=>
{
if(a%2==0)
    return "even";
else
    return "odd"
}
console.log(even(12));

let rev=(s)=>
{
    let s2="";
for(let i=s.length-1;i>=0;i--)
{
    s2=s2+s.charAt(i);
}
return s2;
}
console.log(rev("abs"));

let mean=(...a)=>
{
    let s=0;
    for(let i=0;i<a.length;i++)
    {
        s=s+a[i];
    }
    if((s/a.length)>=40)
        return "pass";
    else
        return "fail"
}
console.log(mean(10,20,34))