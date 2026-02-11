//Consider the following js program. It maintains two arrays ulteam ,
//  and flutterteam, The function
//showMenu() prints both teams and then print a merged list using the spread operator.
//The function display(team type , option ) uses switch statement to print a team based 
// on the value of team type

let ulteam=("abd","ddnfnd","sjdikf","kkjds")
let flutterteam=("fkfof","iuy","iuyjh")
function showmenu(ulteam, flutterteam)
{
console.log(...ulteam,...flutterteam);
let [merged]=[...ulteam, ...flutterteam]
console.log(merged);
}
showmenu(ulteam,flutterteam);
function display(op, teamtype)
{
switch(op)
{
case 1:
{
console.log("type1");
}
case 2:
{
console.log("type 2");
}
}
display(1);
}