'use strict';

function vehicleType (color, code, age){
    let vehicles = ('car', 'motorbike', 'caravan', 'bike');

    if (code === 1){
        code = 'car';
    }
    else if (code === 2){
        code = 'motorbike';
    }
    else if (code === 3){
            code = 'caravan';
    }
    else if (code === 4){
        code = 'bike';
    }
    if (code <1 || code > vehicles.length) {
        return 'unknown vehicle';
    }
    const years = age !== 1 ? 'used' : 'new';
    
    return 'a ' + color + ' ' + years + ' ' + vehicles[code - 1];
}
    
vehicleType('green', 1, 0);
