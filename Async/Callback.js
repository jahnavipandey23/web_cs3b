// console.log("first")
// //asynchronous: 
// console.log("second")
// console.log("third")
// function aa()
// {
//     console.log("first");
// }
// setTimeout(aa,2000);//here code is behaving asynchronously

// let c=0;

// let id =setInterval(()=>{
    
//     console.log("first");
//     if(c===5)
// {
//     clearInterval(id);
// }
// c++;
// },2000);//itne second bad repeatition continues


//Callback
function roll(num,t, next)
{
    setTimeout(()=>
    {
        console.log("Roll no is"+num)
        if(next) next();
    },t)
}
roll(123123,2000, ()=>{
    console.log("wait its getting downloaded");
    roll(13244,3000,()=>
    {
        console.log("wait its getting downloaded");
        roll(132313,5000, ()=>{
            console.log("wait its almost over");
            roll(389963,6000);
        });
    });
});