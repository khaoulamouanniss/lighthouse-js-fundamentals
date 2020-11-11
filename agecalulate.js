const ageCalculator = function (name , yearOfBirth, currentYear){
  var result = "";
  var age=currentYear - yearOfBirth;
  result = name + " is " + age +" years old.";
  return result;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));