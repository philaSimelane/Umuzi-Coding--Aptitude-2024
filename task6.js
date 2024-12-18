function task6(value1, value2, value3, ...otherValues) {

    if (value1[0] !== undefined || value2[0] !== undefined || value3[0] !== undefined || (otherValues.length !== 0 && otherValues[0][0] !== undefined)) {
      return "Function expected a couple of numbers not a list or an array";
    }
  
    let maximumValue = "";
    if (value1 > value2 && value1 > value3) {
      maximumValue = value1;
    } else if (value2 > value3) {
      maximumValue = value2;
    } else {
      maximumValue = value3;
    }
  
    for (let i = 0; i < otherValues.length; i++) {
      if (maximumValue < otherValues[i]) {
        maximumValue = otherValues[i];
      }
    }
  
    return maximumValue;
  }
  
  module.exports = { task6 };