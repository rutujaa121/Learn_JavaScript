let month = "january"

switch(month){
    case "january":
        console.log("31 days")
        break;
    case "february":
        console.log("28 days")
        break;
    case "march":
        console.log("31 days")
        break;
    case "april":
        console.log("30 days")
        break;
    
}

let days = 31
 
switch(days){
    case 31:
        console.log("31 days")
        break;
    case 30:
        console.log("30 days")
        break;
    case 28:
        console.log("28 days")
        break;
    case 29:
        console.log("29 days")
        break;

}

let fruits = "apple"
switch(fruits){
    case "apple":
        console.log("red")
        break;
    case "banana":
        console.log("yellow")
        break;
    case "orange":
        console.log("orange")
        break;
    default :
     console.log(fruits, "is not available")
     break;
}
console.log("After Switch")
