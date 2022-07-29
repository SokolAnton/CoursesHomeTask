// minimum
document.write("Minimum","<br>","<br>")
let car = {
    Manufacturer: "BMW",
    Model: "E34",
    Year: 1988,
    AverageSpeed: 75,
    TunkFuel: 35,
    FuelUsing: 12,
    ShowInfo() {
        document.write(this.Manufacturer,"<br>",this.Model,"<br>",this.Year,"<br>",this.AverageSpeed,"<br>",this.TunkFuel,"<br>",this.FuelUsing,"<br>")
    },
    AddDriverName(DriverName) {
        this.DriverName = DriverName
    },
    CheckDriverName(UserName){
        if(UserName===this.DriverName){
            return true
        }else{
            return false
        }
    },
    CountHoursForTravel(Distance){
        let temp = Distance/this.AverageSpeed
        let res=temp
        temp=parseInt(temp)
        while(temp>0){
            if(temp%4==0){
                res++
            }
            temp--
        }
        return  res.toFixed(2)
    },
    CountFuelForTravel(Distance){
        let res = this.FuelUsing*Distance/100
        return res.toFixed(2)
    }

}
car.ShowInfo();
car.AddDriverName("John")
document.write (car.CheckDriverName("John")," - Name is correct <br>")
document.write(car.CountHoursForTravel(800)," hours  for 800 km<br>")
document.write(car.CountFuelForTravel(250)," litres for 250 km<br>")

// normal 
document.write("<br>","<br>","Normal","<br>","<br>")

let Time = {
    hours: 20,
    minutes:59,
    seconds: 45,
    ShowTime:function(){
        document.write(this.hours,":",this.minutes,':',this.seconds)
    },
    AddSeconds(value){
        this.seconds+=value
        if(this.seconds>=60){
            this.minutes+=parseInt(this.seconds/60)
            this.seconds=(this.seconds%60)
        }
        if(this.minutes>=60){
            this.hours+=parseInt(this.minutes/60)
            this.minutes=(this.minutes%60)
        }
        if(this.hours>=24){
            this.hours=(this.hours%24)
        }
    },
    AddMinutes(value){
        this.minutes+=value
        if(this.minutes>=60){
            this.hours+=parseInt(this.minutes/60)
            this.minutes=(this.minutes%60)
        }
        if(this.hours>=24){
            this.hours=(this.hours%24)
        }
    },
    AddHours(value){
        this.hours+=value

        if(this.hours>=24){
            this.hours=(this.hours%24)
        }
    }

}

Time.ShowTime();
document.write("<br>")
Time.AddSeconds(40);
document.write("add 40 seconds <br>")
Time.ShowTime()
document.write("<br>")

document.write("add 75 minutes <br>")
Time.AddMinutes(75);
Time.ShowTime()

document.write("<br>")

document.write("add 40 hours <br>")
Time.AddHours(40);
Time.ShowTime()



// maximum
document.write("<br>","<br>","maximum","<br>","<br>")

let Fractions = {
    fraction1: {
        upNum: 5,
        butNum: 7,
    },
    fraction2: {
        upNum: 3,
        butNum: 8,
    },
    fractionResult: {
        upNum: 0,
        butNum: 0,
    },
    showFraction(WhatFraction) {
        document.write("Your  fractions is: ", WhatFraction.upNum, "/", WhatFraction.butNum, "<br>")
    },
    checkButNum(firstFraction, secondFraction) {
        if (firstFraction.butNum == 0 || secondFraction.butNum == 0) {
            return false
        }
    },
    addFractions(firstFraction, secondFraction) {
        firstFraction.upNum = prompt("Input UpNum your first value: ")
        firstFraction.butNum = prompt("Input ButNum your first value: ")
        secondFraction.upNum = prompt("Input UpNum your first value: ")
        secondFraction.butNum = prompt("Input ButNum your first value: ")

    },
    summOfFractions(firstFraction, secondFraction, resultFraction) {
        if (this.checkButNum(firstFraction, secondFraction) == false) {
            document.write("Incorrect data <br> ")
        }
        else if (firstFraction.butNum == secondFraction.butNum) {
            resultFraction.upNum = parseInt(firstFraction.upNum) + parseInt(secondFraction.upNum)
            resultFraction.butNum = firstFraction.butNum
        }
        else {
            resultFraction.upNum = (firstFraction.upNum * secondFraction.butNum) + (firstFraction.butNum * secondFraction.upNum)
            resultFraction.butNum = firstFraction.butNum * secondFraction.butNum

        }
        document.write("Your sum result is: ", resultFraction.upNum, "/", resultFraction.butNum, "<br>")

    },
    differenceOfFractions(firstFraction, secondFraction, resultFraction) {

        if (this.checkButNum(firstFraction, secondFraction) == false) {
            document.write("Incorrect data <br> ")
        }
        else if (firstFraction.butNum == secondFraction.butNum) {
            resultFraction.upNum = parseInt(firstFraction.upNum) - parseInt(secondFraction.upNum)
            resultFraction.butNum = firstFraction.butNum
        }
        else {
            resultFraction.upNum = (firstFraction.upNum * secondFraction.butNum) - (firstFraction.butNum * secondFraction.upNum)
            resultFraction.butNum = firstFraction.butNum * secondFraction.butNum

        }
        document.write("Your difference result is: ", resultFraction.upNum, "/", resultFraction.butNum, "<br>")
    },
    doubleOfFractions(firstFraction, secondFraction, resultFraction) {
        if (this.checkButNum(firstFraction, secondFraction) == false) {
            document.write("Incorrect data <br> ")
        } else {
            resultFraction.upNum = firstFraction.upNum * secondFraction.upNum
            resultFraction.butNum = firstFraction.butNum * secondFraction.butNum
        }
        document.write("Your double result is: ", resultFraction.upNum, "/", resultFraction.butNum, "<br>")
    },
    divisionOfFractions(firstFraction, secondFraction, resultFraction){
        if (this.checkButNum(firstFraction, secondFraction) == false) {
            document.write("Incorrect data <br> ")
        }else {
            resultFraction.upNum = firstFraction.upNum * secondFraction.butNum
            resultFraction.butNum = firstFraction.butNum * secondFraction.upNum

        }
        document.write("Your division result is: ", resultFraction.upNum, "/", resultFraction.butNum, "<br>")

    }

}
Fractions.addFractions(Fractions.fraction1, Fractions.fraction2)
Fractions.showFraction(Fractions.fraction1)
Fractions.showFraction(Fractions.fraction2)
document.write("<br>")
Fractions.summOfFractions(Fractions.fraction1, Fractions.fraction2, Fractions.fractionResult)

Fractions.differenceOfFractions(Fractions.fraction1, Fractions.fraction2, Fractions.fractionResult)

Fractions.doubleOfFractions(Fractions.fraction1, Fractions.fraction2, Fractions.fractionResult)

Fractions.divisionOfFractions(Fractions.fraction1, Fractions.fraction2, Fractions.fractionResult)








