console.log(10/2);
console.log(10/2.5);
console.log(10/0);
console.log(10/0.0);
console.log("hinal"/0);
console.log(10/null);
console.log(10/undefined);

let result=10+100+"Hinal"
console.log(result);

let result1 ="Hinal"+10+100
console.log(result1);

let marks  = "5"+5
console.log(marks);

let marks1  = "5"-5
console.log(marks1);

console.log(10/true);
console.log(10/false);

console.log("5"*5);
console.log("Hinal"*5)

let num1 ="50"
console.log(typeof num1);
let num2 = 50
console.log(typeof num2);

if (num1==num2)
{
     console.log("Matched");
     
}
else{
    console.log("Not matched");
    
}

console.log("===============");

if (num1===num2)
{
     console.log("Matched");
     
}
else{
    console.log("Not matched");
    
}

console.log(16>10);
console.log(16<10);
console.log(16>=16);
console.log(10>8 && 10>5);
console.log(10>8 && 10<5);
console.log(10>8 || 10>5);

console.log("**************");

console.log(!true);
console.log(!false);

let  str1 = "This is JS"
let str2 = "JS"
let str3 ="This is js "

if (str1.includes(str2))
{
    console.log("pass");
    
}
else {
    console.log("fail");
    
}

console.log("==================");
if (str1==str3)
{

    console.log("pass");
    
}
else {
    console.log("fail");
    
}

if (str1.toUpperCase()==str3.toUpperCase())
{

    console.log("pass");
    
}
else {
    console.log("fail");
    
}


let num3 = 10
num3=num3+5
console.log(num3);

// or
num3+=5
console.log(num3);
//num3=num3*5
num3*=5
console.log(num3);

num3/=5
console.log(num3);
