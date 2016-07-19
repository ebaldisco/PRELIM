function grade(grade_input){
    return grade;
}

if (grade < 75){
    if (grade%2 == 0){
      console.log('Your new grade is '+(grade-2));
  }
  else{
      console.log('Your new grade is '+(grade-3));
  }
  }
  else if(grade >= 75){
      if (grade%2 == 0){
      console.log('Your new grade is '+(grade+5));
  }
  else{
      console.log('Your new grade is '+(grade+3));
  }     
  }
  
  module.exports = {
    computeGrade :grade,
    
};
