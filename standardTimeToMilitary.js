let standardTime = "12:05:45AM";
let standardTimeTwo = "06:40:03AM";
let standardTimeThree = "04:59:59AM";
let standardTime4 = "07:05:45PM";


function standardTimeToMilitary(standardTime) {

    let pmOrAm = standardTime.slice(-2);
    let timePart = standardTime.slice(0,8);
    
    let [hour, min, sec] = timePart.split(":");
    // hour = "02"
    let hourInInt = parseInt(hour);
    // hourInInt = 2

    if(pmOrAm === "AM") {
        if(hourInInt === 12) { // 2 === 12
            hour = "00";
        }
    }
    
    if(pmOrAm === "PM") {
        debugger;
        if(hourInInt < 12) { 
            let inMilitary = hourInInt + 12; // inMilitary = 2 + 12
            hour = inMilitary.toString(); // hour = "14"
        }
    }

    return `${hour}:${min}:${sec}` ;
}

let militarytTime = standardTimeToMilitary(standardTime4);
console.log(militarytTime);

