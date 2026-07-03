let fullname = " My name is Hinal bhuva "
console.log(fullname.length);

console.log(fullname[1]);

console.log(fullname.includes("name"));

console.log(fullname.includes("Name"));


console.log(fullname.startsWith("My"));


console.log(fullname.endsWith("bhuva"));

//console.log(fullname.split(" "))


let arr = fullname.split(" ")
console.log(arr[3]);

console.log(fullname.toUpperCase());

console.log(fullname.toLowerCase());

console.log(fullname.trim());

console.log(fullname.replace("bhuva","BHuva"));


console.log(fullname);


let finalMsg = "Total price is 200 USD"

let value = finalMsg.split(" ")[3]
console.log(typeof value);

let price = parseInt(value)

console.log(typeof price);
console.log(price);

if (price ==200){
    console.log("Pass");
    
}
else{
    console.log("Fail");
    
}

let msg = 'Final \tamount is \'300\' \nUSD'
console.log(msg);

let X=90

let newMsg = `Final amount is ${X} USD`
console.log(newMsg);










//let lastname = new String ("Bhuva")
//console.log(typeof lastname);
