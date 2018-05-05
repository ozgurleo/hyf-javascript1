'use strict';

function vehicleType (color, code, age){
    let vehicles = ['car', 'motorbike', 'caravan', 'bike'];
    const years = age !== 1 ? 'used' : 'new';

    if (code === 1){
        code = 'car';
        return 'a ' + color + ' '+ years + ' ' + vehicles[0];
    }
    else if (code === 2){
        code = 'motorbike';
        return 'a ' + color + ' '+ years + ' ' + vehicles[1];
    }
    else if (code === 3){
        code = 'caravan';
        return 'a ' + color + ' '+ years + ' ' + vehicles[2];
    }
    else if (code === 4){
        code = 'bike';
        return 'a ' + color + ' '+ years + ' ' + vehicles[3];
    }
    else if (code <1 || code > vehicles.length) {
        return 'unknown vehicle';
    }
    
        }
    
console.log (vehicleType('green', 1, 0));
console.log (vehicleType('red', 0, 0));
console.log (vehicleType('blue', 2, 3));
console.log (vehicleType('black', 3, 1));
