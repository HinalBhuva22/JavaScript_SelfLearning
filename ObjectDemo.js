let obj1 ={}
console.log(typeof obj1);

let obj2 ={
    "Name": "Hinal",
    "Address": "Surat",
    "Number": 1235884555,
    "Status": false,
   
}

//console.log(typeof obj2);
console.log(obj2);
console.log(obj2.Name);
console.log(obj2.Number);
console.log(obj2.Status);

console.log(obj2["Name"]);
console.log(obj2["Address"]);

console.log(obj2["Salary"]);

obj2.Salary = 100
obj2.Exp = 1
console.log(obj2);

delete obj2.Salary
console.log(obj2);

console.log("========================");

let obj3 ={
    "Status":"gujarat",
    "country":"India"
}

obj2.fullAddress = obj3

console.log(obj2);

obj2.myFamily = ["M1", "M2"]
console.log(obj2);
console.log(obj2.fullAddress.country);
console.log(obj2.myFamily[1]);

obj2.myFunction  = function(){
    console.log("Hello from Function");
    
}

console.log(obj2);
obj2.myFunction()

console.log("========================");

let Hinal = obj2
console.log(typeof Hinal);
console.log(Hinal);

delete Hinal.fullAddress
// console.log(Hinal);
console.log(obj2);

obj2.somerandomValue = "Alpha"
console.log(Hinal);
