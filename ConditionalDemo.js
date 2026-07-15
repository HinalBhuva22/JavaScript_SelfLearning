if (10>20)
{
   console.log("I'm inside if block");
   
}

else {
    console.log("I'm inside else block");
}

let browserName = "FF"

if(browserName.includes("Chrome"))
{
    console.log("Chrome Started");
    
}
else if(browserName.includes("Firefox") || browserName.includes("FF")) 
{
       console.log(" FF Started");
}
else if (browserName.includes("Edge"))
{
    console.log("Edge Started");
}
else {
    console.log("This tool only support FF, Chrome and Edge Browser");
    
}

let day = new Date().getDay()

console.log(day);

switch (day) 
{
    case 0:
        console.log("Sunday");
        
        break;

    case 1:
       console.log("Monday");
       
       break;

    case 2:
       console.log("Tuesday");
       
       break;

     case 3:
       console.log("Wednesday");
       
       break;

     case 4:
       console.log("Thursday");
       
       break;

     case 5:
       console.log("Friday");
       
       break;

     case 6:
       console.log("Saturday");
       
       break;

    default:
         console.log("Sorry");
         
        break;
}