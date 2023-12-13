//Lesson 2: blocks and scope

// create  a variable called city
const city ='New York City';

//create a function and put the variable and return some values
function logCitySkyline(){
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
};

//output the function
console.log(logCitySkyline());