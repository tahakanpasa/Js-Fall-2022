/** 
 * 
 * if(conditionOne){
// If condionOne satisfied then only this block of code will be executed
} else if (conditionTwo) {
    // If conditionOne isn't satisfied and conditionTwo is satisfied then this block will be executed
} else {
// Otherwise this block will be executed
}
*/
let roomTemp = 23;
// let heatStatus = roomTemp <= 60 ? "Turn Heat On" : "Keep Heat off"
if(roomTemp <= 60){
    if (roomTemp < 30){
        console.log("Cover outside hose");
    } else if (roomTemp < 40){
        console.log("Be careful abt water line");
    }
    console.log("Turn Heat On");
} 
else if (roomTemp >= 70){
    console.log("Turn AC on");
}
else{
    console.log("Keep HVAC off");
}
let month = "Feb";
let isLeapYear = true;
switch(month.toLowerCase()){
    case "jan":
    case "mar": 
    case "may":
            console.log(month + " got 31 days");
        break;
    case "feb":
        if(!isLeapYear){
        console.log("Feb got 28 days");
        } else {
        console.log("Feb got 29 days");
        }
        break;
    case "apr":
        console.log("Apr got 30 days");
        break;
    default:
        console.log("Incorect month name");
}