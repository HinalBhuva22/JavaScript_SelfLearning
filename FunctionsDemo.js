function hinal()
{
    console.log("Hello JS");
    
}

console.log(hinal());

// hinal()

function showName(fname, lname)
{
    return fname+" "+lname
}
console.log(showName('Hinal', 'Bhuva'));

console.log(typeof showName); // function is also an object in js

let myfunc = function f1() //(Function expression) assigned the 1 one varaible myfunc to the  function f1
{
    console.log("I am in F1");
    return 40
}
let result =myfunc()
console.log(result);
console.log(typeof myfunc);

let myfuncNew = function f2()
{
    console.log("I am in F2");
    
}
myfuncNew() // calling the function f2 using variable myfuncNew

let myfuncNew1 = function f3 (n1, n2, n3) // anonymous function
{
    console.log("i am in FF");
    return n1+n2+n3
    
}
console.log(myfuncNew1(10, 20, 30)) // calling the function f3 using variable myfuncNew1

//  add func into object

let myObj=
 {
    "Name" : "Hinal",
    f3:function()
    {
        console.log("I am inside  object");
        
    }
}
myObj.f3();

let arr = [
    12, "Hinal", f1=function()
    {
        console.log("i am inside array");
        
    }
]

let y = arr[2]
y()
// arr[2]()

console.log("================");

let z =() => // 
{
    console.log("Hello JS again");
    
}
z()

let h =(x1,x2) => 
{
    console.log("hello...");
    return x1*x2
}
console.log(h(12, 12));


let myAddress = () =>   console.log("Surat");

myAddress()

let myAddressNew = (house, street) =>   console.log(`${house} ${street} Surat`);

myAddressNew("villa", "whitefield")