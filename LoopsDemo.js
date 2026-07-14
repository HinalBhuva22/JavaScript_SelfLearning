for(let x=0; x<=100; x=x+2)
{
    console.log("Value is ", x);
    
}

/*for(let x=100; x>0; x--)
{
    console.log("Value is ", x);
    
}*/

/* let y = 0
for (;y<=100;) 
{
    console.log("Value is ", y);
    y++
}*/

let arr = [12, 20, 56,  "hinal", true ]

for(let x=0; x<arr.length; x++)
{
    console.log(arr[x]);
    
}

arr.forEach(element =>{
    console.log("Using for each " , element);
    
})

for(let myarrValues in arr)  // for with in array ( use in instead of for - for keyword - it will return index value
{
    console.log("Using for of ", myarrValues);
    console.log("Using for of ", arr[myarrValues]);
    
    
}

let fname = "Selenium Webdriver" // character by character...

for(x of fname)
{
    console.log(x);
    
}

let myObj={
      "Name": "hinal",
      marks: 72,
      status: false

}


for (let x in myObj ) // for in with object - return key only
{
    console.log(x);
    console.log(myObj[x]); // key- value....
    
}


// console.log(myObj);

let sum=5

while (sum<15){
    console.log("Sum value", sum);

    if (sum===10){
        break
    }
    sum++
}  // something break or countinue 

for (let x=0;x<10;x++)
{
    if(x===4)
    {
        continue
    }
    console.log(x);
    
}
let y=100
do 
{
     console.log("Value is ", y);
     y++
     
} while (y<15);  // do is always run, condition is true or false and while only run when condition is true
