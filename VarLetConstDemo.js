var fname = "Hinal"
var fname = "Bhuva"
console.log(fname);   // var van be re-declared and updated

let lname = "Selenium"
// let lname = "Webdriver" - not allowed
lname = "Webdriver" // - allow to update value only
console.log(lname);  // let allowed update the value but not re-declared

const toolname = "Selenium Grid"
//toolname = "Selenium Grid 4.0"
console.log(toolname); // const not allowed to update or even re-declared


for (var i=0;i<5;i++)
{
     console.log(i);
     
}
console.log("Outside value is", i); // with var we can access outside the block as well
                                    // var is global scope & function scope
console.log("let demo");

for (let x=0;x<5;x++)
{
     console.log(x);
     
}
// console.log("Outside value is", x); // let only access the blog of code
// but let & const provide only block scope

console.log("Const Demo");  // you cannot chnage the value of const variable

/* for (const y=0;y<5;y++) 
{
     console.log(y);
     
}
console.log("Outside value is", y); */
    


var a
let b
const c = 10
    
console.log(a);
console.log(b);
console.log(c);

console.log("========================");

let greeting  = "Hello JS"

if (true)
{
    let greeting = "Hello Java"
    console.log(greeting);
    
}
console.log("Outside if condition", greeting);
