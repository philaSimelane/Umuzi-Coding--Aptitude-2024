function task4(side1, side2, side3){
    let semiPerimeterOfTriangle = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(
        semiPerimeterOfTriangle *
          (semiPerimeterOfTriangle - side1) *
          (semiPerimeterOfTriangle - side2) *
          (semiPerimeterOfTriangle - side3)
      ); // using Heron's formula
      return Math.floor(area);
}

module.exports = { task4 };