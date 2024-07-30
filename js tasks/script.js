// Check the number is Eeven or Odd
let number = Number(prompt("Add Your Number"));
if(number % 2 == 0){
    console.log("Number is Even");
}
else{
    console.log("Number is Odd");
}


// Fizz Buzz Game

let num = Number(prompt("Add Your Number "));
if(num % 3 == 0 && num % 5 == 0){
    console.log("Fizz Buzz")
}
else if(num % 5 == 0){
    console.log("Fizz");
}
else if(num % 3 == 0){
    console.log("Buzz");
}
else{
    console.log("Unacceptable")
}


// مساحة الدائرة
/*مساحة الدائرة تُحسب باستخدام الصيغة:
المساحة= π×(rx2)

المحيط=  
2×π×r
*/ 

let radius = parseFloat(prompt("Add Radius Circle"));
let Fixed_value = 3.14;
console.log(Fixed_value * (Math.pow(radius, 2)));
console.log("Area of a circle");
console.log(Fixed_value * radius * 2);
console.log("circumference of the circle");


// Positive or Negative

let number_2 = Number(prompt("Add your num"));
console.log(number_2 > 0 ? "Positive" : number_2 < 0 ? "Negative" : "Zero");


// Print Sum of two numbers

let first_num = Number(prompt("Add first num"));
let Second_num = Number(prompt("Add Second num"));
console.log(first_num + Second_num);



