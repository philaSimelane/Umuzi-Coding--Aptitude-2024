function task5(value1,value2,value3){
    if(value1[0] !== undefined || value2[0] !== undefined || value3[0] !== undefined){
        return "Function expected a couple of numbers not a list or an array";
    }
    let maximumValue = "";
    if (value1 > value2 && value1 > value3) {
        maximumValue = value1;
    }
    else if (value2 > value3) {
        maximumValue = value2;
    }
    else {
        maximumValue = value3;
  }
  return maximumValue;

}

module.exports = { task5 };