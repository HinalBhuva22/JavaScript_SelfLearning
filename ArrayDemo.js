let arr = [10,20,30, "Hinal", true]
console.log(arr);
console.log(typeof arr);
console.log(arr[1]);
console.log(typeof arr[4]);
console.log(arr[4]);
console.log(arr.length);

console.log(arr[arr.length-1]);

console.log(arr.push(100)) // add last element
console.log(arr);

arr.unshift("Bhuva") // add first element
console.log(arr);

arr.pop()
console.log(arr);  // remove the last element

arr.shift()
console.log(arr);  // remove the first element

arr.splice(1,2)
console.log(arr); // remove the element from index 1 to 2


arr.splice(0,2)
console.log(arr);  // remove the element from index 0 to 2

console.log("==================================");


let arr1 = [10, 20, 30, "Hinal", true]
let arr2 = ["Java", "JS", "Python"]

arr1.push(arr2)

console.log(arr1);


console.log(arr1[5][1]);


let obj1 ={
    "Name": "Hinal Bhuva",
    "Language": "JavaScript"
}

arr1.push(obj1)

console.log(arr1);

console.log(arr1[6].Name);
console.log(arr1[6]["Name"]);


let arr4 = [10,20,30, "Hinal", true]

for(let i=0;i<arr4.length; i++)
{
    console.log(arr4[i]);
    
}

console.log("==================================");


for(let i=0;i<arr1.length; i++)
{
    console.log(arr1[i]);
    
}