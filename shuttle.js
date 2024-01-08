//Assignment is to calculate how many days it will take for shuttle Determination to reach the Moon
//Output is supposed to look like this: "_____ will take ___ days to reach Moon."

//Declaring Variables
let ShuttleName = 'Determination';
let ShuttleMPH = 17500;
let KMtoMars = 225000000;
let KMtoMoon = 38400;
const MilesPerKM = 0.621;

//To calculate days of travel, we need to convert the distances from KM to Miles...
//then divide miles to destination by the shuttile speed in MPH, to get hours to destination...
//then divide by 24 to convert hours to days

//Kilometers to Miles calculations
let MilesToMars = KMtoMars * MilesPerKM;
let MilesToMoon = KMtoMoon * MilesPerKM;

//Mars travel time calculation
let HoursToMars = MilesToMars / ShuttleMPH;
let DaysToMars = HoursToMars / 24;

//Moon travel time calculation
let HoursToMoon = MilesToMoon / ShuttleMPH;
let DaysToMoon = HoursToMoon / 24;

//Printing travel time to Mars
console.log(ShuttleName + " will take " + DaysToMars + " days to reach Mars.");

//Printing travel time to Moon
console.log(ShuttleName + " will take " + DaysToMoon + " days to reach the Moon.");