"use strict";
const vehicles = ['car', ' motorbike', ' bike', ' caravan'];
const pluralVehicles = vehicles.map(x => x+'s');

function advertisement (vehicles){
    vehicles = pluralVehicles.toString() .replace(/,([^,]*)$/, ' and $1');  
        return ("ozgur's garage helps your " + vehicles + " maintenance and repair.");
}

const text = advertisement(vehicles);
console.log(text);