const c1= require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
c1.question("Enter soething",
    (answer)=>{
        console.log("your answer", answer);   
    c1.close();
    });