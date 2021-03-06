// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let sum = weight/height**2
    if (sum <= 18.5){
      return 'Underweight'
    }else if (sum <= 25){
      return 'Normal'
    }else if(sum <= 30){
      return ('Overweight')
    }else if(sum > 30){
      return 'Obese'
    }
}

//simple soln
function bmi(weight, height) {
  
    var bmi  = weight/(height*height);
    
     return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}
    