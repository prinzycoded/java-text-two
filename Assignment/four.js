function checkAge(age) {
  if (age >= 0 && age <= 2) {
    console.log(age + ":", "Baby");
  } else if (age >= 3 && age <= 12) {
    console.log(age + ":", "Child");
  } else if (age >= 13 && age <= 17) {
    console.log(age + ":", "Teenager");
  } else if (age >= 18 && age <= 35) {
    console.log(age + ":", "Young Adult");
  } else if (age >= 36 && age <= 59) {
    console.log(age + ":", "Adult");
  } else {
    console.log(age + ":", "Senior");
  }
}

checkAge(2);
checkAge(10);
checkAge(15);
checkAge(22);
checkAge(45);
checkAge(70);