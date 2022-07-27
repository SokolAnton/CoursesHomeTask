// //minimum

// //task 1


// let UserAge = prompt("How old are you? ")
// while (UserAge <= 0) {
//     UserAge = prompt("Are you joking? Enter the correct data, please: ")
// }
// if (UserAge > 0 && UserAge <= 11) {
//     alert("Child")
// } else if (UserAge > 11 && UserAge <= 17) {
//     alert("Teenager")
// } else if (UserAge > 17 && UserAge <= 59) {
//     alert("Adult")
// } else if (UserAge >= 60) {
//     alert("Pensioner    ")
// }

// // task 2

// let check = prompt("Input 0 if you want the symbol from English keyboard or 1 if from Russian kewyboard")
// if (check < 0 || check > 1) {
//     check = prompt("Inccorect data, again please!")
// }
// let Digit = prompt("Input the digit, please: ")

// if (check == 0) {
//     switch (Digit) {
//         case '1': alert("Your symbol is: !");
//             break;
//         case '2': alert("Your symbol is: @");
//             break;
//         case '3': alert("Your symbol is: #");
//             break;
//         case '4': alert("Your symbol is: $");
//             break;
//         case '5': alert("Your symbol is: %");
//             break;
//         case '6': alert("Your symbol is: ^");
//             break;
//         case '7': alert("Your symbol is: &");
//             break;
//         case '8': alert("Your symbol is: *");
//             break;
//         case '9': alert("Your symbol is: (");
//             break;
//     }
// }
// else if (check == 1) {
//     switch (Digit) {
//         case '1': alert("Your symbol is: !");
//             break;
//         case '2': alert("Your symbol is: @");
//             break;
//         case '3': alert("Your symbol is: №");
//             break;
//         case '4': alert("Your symbol is: ;");
//             break;
//         case '5': alert("Your symbol is: %");
//             break;
//         case '6': alert("Your symbol is: :");
//             break;
//         case '7': alert("Your symbol is: &");
//             break;
//         case '8': alert("Your symbol is: *");
//             break;
//         case '9': alert("Your symbol is: (");
//             break;
//         default: alert("Incorrect data:")
//     }
// }

// // task 3


// let start = parseInt(prompt("Input the first number between which you want to summ numbers: "))
// let end = parseInt(prompt("Input the last number between which you want to summ numbers: "))
// let i=start;
// let summ = 0;
// while (i <= end) {
//     summ += i;
//     i++;
// }
// alert("Sum between "+start+" and "+end+" is: " + summ);



// // task 4


// let FirstNumber = prompt("Input first number please: ")
// let SecNumber = prompt("Input second number please: ")



// FirstNumber = Math.abs(FirstNumber);
// SecNumber = Math.abs(SecNumber)

// while (SecNumber) {
//     let temp = SecNumber
//     SecNumber = FirstNumber % SecNumber;
//     FirstNumber = temp
// }
// alert("Result is: "+FirstNumber)


// // task 5 

// let UserDigit = prompt("Input a number, please: ")

// let i=1;
// while(i<=UserDigit){
//     if((UserDigit%i)==0){
//         alert(i);
//     }
//     i++;
// }


// //middle

// // task 1


// let ValuePalindrom = prompt("Input the 5-digits number, please: ")
// while (ValuePalindrom < 10000 || ValuePalindrom > 99999) {
//     ValuePalindrom = prompt("Incorect data, try again: ")
// }
// let flag = true;
// for (let i = 0; i < (ValuePalindrom.length / 2); i++) {
//     if (ValuePalindrom[i] !== ValuePalindrom[(ValuePalindrom.length - 1) - i]) {
//         flag = false;
//     }
// }
// alert(flag)


// //task 2


// let PurchaseSumm = prompt("Input your purchase summ, please: ") 
// let PurchaseResult;
// if(PurchaseSumm>=200&&PurchaseSumm<300){
//     PurchaseResult=PurchaseSumm-(PurchaseSumm/100*3);
//     alert(PurchaseResult);
// }
// else if(PurchaseSumm>=300&&PurchaseSumm<500){
//     PurchaseResult=PurchaseSumm-(PurchaseSumm/100*5);
//     alert(PurchaseResult);
// }
// else if(PurchaseSumm>=500){
//     PurchaseResult=PurchaseSumm-(PurchaseSumm/100*7);
//     alert(PurchaseResult);
// }


// // task 3


// let Value;
// let double = 0;
// let unpaired = 0;
// let negative = 0;
// let positive = 0;
// let zero = 0;
// let i = 0;
// while (i < 10) {
//     value = prompt("Input your number: ")
//     if (value < 0) {
//         negative++;
//     }
//     else if (value == 0) {
//         zero++;
//     }
//     else {
//         positive++
//     }
//     if(value%2==0){
//         double++
//     }
//     else{
//         unpaired++;
//     }
//     i++
// }

// alert("Negative: " + negative + "," + "positive: " + positive + "," + "zero: " + zero + "," + "double: " + double + "," + "unpaired: " + unpaired + ",")

// // task 4

// let arr =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
// let i=0;
// let flag=true;
// while(i<arr.length){
//     flag=confirm(arr[i]+". Want to see next day of the week?")
//     if(flag==false){
//         break
//     }
//     i++

// }

// //maximum

// //task 1

let flag2 = true;
flag2=confirm("Are you number <50 ")
if(flag2==true){
    flag2=confirm("Are you number <25")
    if(flag2==true){
        flag2=confirm("Are you number <12")
        if(flag2==true){
            flag2=confirm("Are you number <6")
            if(flag2=true){
                flag2=confirm("Are you number <3")
                if(flag2==true){
                    flag2=confirm("Are you number >1")
                    if(flag2==true){
                        
                    }
                }
            }
        }
    }

}


// // task 2

// for (let i = 2; i < 10; i++) {
//     for(let j=1;j<11;j++){
//         document.write(i*j+' ')
//     }
//     document.write(" : "+ i+" was doubled. "+"<br>"+"<br>")
// }
