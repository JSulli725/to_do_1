// 1. Set and Swap
var myNumber = 42;
var myName = "jordan";
function numNameSwapper(num, name){
    var temp = name;
    var newName = num;
    var newNum = name;
    console.log(newNum, newName);
    return newNum, newName;
}
numNameSwapper(myNumber, myName);


// 2. print -52 to 1066
// for(num = -52; num <= 1066; num++){
//     console.log(num)
// }


//3. Don't Worry, Be Happy
// function beCheerful(count){
//     var printCount = 1;
//     while(printCount <= count){
//         console.log(printCount + " good morning!");
//     printCount++;
//     }
// }
// beCheerful(98);


//4. Multiples of Three - but Not All
// for(var num = -300; num < 0; num+=3){
//     if(num == -6 || num == -3){
//         continue;
//     }
//     console.log(num);
// }


//5. PRinting Integers with While
// var num = 2000;
// while(num <= 5280){
//     console.log(num);
//     num ++;
// }

//.6 You Say It's Your Birthday
// var myBday = [7, 25];
// function bDayGuesser(num1, num2){
//     if(myBday[0] == num1 && myBday[1] == num2){
//             console.log("How did you know?");
//         } else if(myBday[0] == num2 && myBday[1] == num1){
//             console.log("How did you know?");
//         } else {
//         console.log("just another day...")
//     }
// }
// bDayGuesser(26,7);


//7. Leap Year
// function isLeapYear(year){
//     if(year % 400 == 0){
//         console.log("this is a leap year");
//     }
//     else if(year % 100 == 0){
//         console.log("this is not a leap year")
//     }
//     else if(year % 4 == 0){
//         console.log("this is a leap year");
//     } else{
//         console.log("not a leap year")
//     }
// }
// isLeapYear(204);


//8. PRint and Count
// var multiplesOfFive = 0;
// for(var num = 512; num <= 4096; num++){
//     if(num % 5 == 0){
//         console.log(num);
//         multiplesOfFive++;
//     }
// }
// console.log("There were " + multiplesOfFive + " multiples of 5");


//9. Mtulitples of Six
// num = 0
// while(num <= 60000){
//     num++;
//     if(num % 6 == 0){
//         console.log(num);
//     }
// }

//10. Counting, the Dojo Way
// for(var num = 0; num <= 100; num++){
//     if(num % 10 == 0){
//         console.log("Dojo");
//     } else if(num % 5 == 0){
//             console.log("Coding");
//     } else {
//         console.log(num);
//     }
// }

//11. What Do You Know?
// function duck(incoming){
//     return incoming;
// }
// console.log(duck(12));

//12. Whoa, That Sucker's Huge...
// var finalScore = 0;
// for(var num = -300000; num <= 300000; num++){
//     if(num % 2 != 0){
//         finalScore += num;
//     }
// }
// console.log(finalScore);


//13. Countdown by Fours
// var num = 2016;
// console.log(num)
// while(num != 4){
//     num -= 4
//     console.log(num);
// }


//14. Flexible Countdown
// function countdown(lowNum, highNum, mult){
//     for(var num = highNum; num > lowNum; num -= mult){
//         console.log(num);
//     }
// }
// countdown(2,9,3);


//15. The Final Countdown
// function finalCountdown(param1, param2, param3, param4){
//     while(param2 <= param3){
//         if(param2 == param4){
//             param2++;
//             continue;
//         } else if(param2 % param1 == 0){
//             console.log(param2);
//         }
//         param2 ++;
//     }
// }
// finalCountdown(3,5,17,9);