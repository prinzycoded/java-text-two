function checkNumber(num) {
  if (num >= 1 && num <= 33) {
    console.log(num + ": Low");
  } else if (num >= 34 && num <= 66) {
    console.log(num + ": Medium");
  } else if (num >= 67 && num <= 100) {
    console.log(num + ": High");
  } else {
    console.log(num + ": Out of range");
  }
}

checkNumber(10);
checkNumber(50);
checkNumber(85);
checkNumber(0);
checkNumber(100);