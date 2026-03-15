let totalBill = 15000;
let numberOfPeople = 4;
let tipPercent = 10;

let tipAmount = (totalBill * tipPercent) / 100;

let totalWithTip = totalBill + tipAmount;

let perPerson = totalWithTip / numberOfPeople;

console.log("Tip amount:", tipAmount);
console.log("Total bill including tip:", totalWithTip);
console.log("Each person should pay:", perPerson);