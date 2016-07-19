const util = require('./newgrade');
const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('ENTER GRADE: ', (input_grade) => {
  // TODO: Log the answer in a database
  
  var grade_input = parseInt(input_grade);
  
  var grade = util.computeGrade(grade_input);
  
  
  
    
  rl.close();
});