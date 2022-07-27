// // minimum 

// // task 2

// function ReturnNumberOFArguments(){
//     let count=0;
//     for(let i=0;i<arguments.length;i++){
//         count++;
//     }
//     return count
// }

// alert(ReturnNumberOFArguments(1,2,3,4))

// // task 3 

// function ReturnNumber(FirstValue, SecondValue){
//     if(FirstValue<SecondValue){
//         return -1;
//     }else if(FirstValue>SecondValue){
//         return 1;
//     }else if(FirstValue===SecondValue) {
//         return 0 ;
//     }
// }
// alert(ReturnNumber(1,1))


// // task 4

// function Factorial(UserValue) {
//     if (UserValue == 0) {
//         return 1
//     }else {
//         return UserValue*Factorial(UserValue-1)
//     }
// }

// alert(Factorial(6))

// // task 5


// function InOneValue(num1,num2,num3){
//     return 100*num1+10*num2+num3
// }

// alert(InOneValue(1,4,9))

// // task 6

// function Square(length,width){
//     let count=0
//     for(let i=0;i<arguments.length;i++){
//         count++
//     }
//     if(count==1){
//         return Math.pow(length,2)
//     }
//     else{
//         return length*width
//     }
// }


// alert(Square(4,7))

// // norma


// //  task 1 


function IsPerfect(UserValue){
    let temp=0;

    for(let i=1;i<UserValue;i++){
        if(UserValue%i==0){
            temp+=i
        }
    }
    if(temp==UserValue){
        document.write("Perfect num is: ")
        document.write(UserValue,"<br>")
        return UserValue
    }
    else{
        return false
    }
}




// //task 2


function DiapasonOfPerfectValue(start,end){
    for(let i=start;i<end;i++){
        IsPerfect(i)
        }
}
DiapasonOfPerfectValue(1,30)


