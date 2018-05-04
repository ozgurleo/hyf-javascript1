function vehicleType (color, code, age){
    if (code === 1){
        code = 'car';
    }
    else if (code === 2){
        code = 'motorbike';
    }else{
        code = 'unknown';
    }
    const years = age !== 1 ? 'used' : 'new'
    console.log (color + ' ' + code + ' ' + years);
}
      
vehicleType('blue', 2, 5);
vehicleType('red', 1, 1);
vehicleType('red', 3, 6);