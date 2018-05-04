

function vehicleType (color, code){
    if (code === 1){
        code = 'car';
    }
    else if (code === 2){
        code = 'motorbike';
    }else{
        code = 'unknown';
    }
    console.log (color + ' ' + code);
}
      
vehicleType('blue', 2);
vehicleType('red', 1);
vehicleType('red', 3);
