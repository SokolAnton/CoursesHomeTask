// minimum

// task 1

let a = 0.1;
let b = 0.2;


let res = (((a * 10) + (b * 10)) / 10);
alert("task 1   " + res);

//task 2

let c = "1";
let d = 2;

let res2 = parseInt(c) + d;

alert("task 2   " + res2);


//task 3

let weigth = prompt("Input max memory in your memory stick: ")

const FileWeigth = 820;

let res3 = (weigth - (weigth % FileWeigth)) / FileWeigth;

alert("task 3   " + res3);

//normal

//task 1

let MoneyInWallet = prompt("Input your amount of money in your wallet: ");
let ChocolateCost = prompt("Input the chocolate cost,please: ");

let chocolateAmount = (MoneyInWallet - (MoneyInWallet % ChocolateCost)) / ChocolateCost;

let Change = MoneyInWallet % ChocolateCost;

alert("You can buy: " + chocolateAmount + " chocolate and you have " + Change + " change in your wallet");

//task 2

let ReverseNumber = prompt("Input number with 3 digits please: ");

let res4 = (((ReverseNumber % 100) % 10) * 100) + ((parseInt((ReverseNumber / 10)) % 10) * 10) + (parseInt(ReverseNumber / 100));
alert("Task 2   " + res4);


//max

//task 1

let BankAmount = prompt("Input the amount of money which you will give to the bank: ")
const Percent = 5;
const Month = 2;

let res5 = (((BankAmount*Percent*Month)/100)/12);

alert(res5);

// task 2

alert(2 && 0 && 3);
alert(2 ||  0 || 3);
alert(2 && 0 || 3);