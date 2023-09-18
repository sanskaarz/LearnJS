let num1 = prompt("Enter 1st number");
let num2 = prompt("enter 2nd number");
let num11 = num1%10
let num22 = num2%10

console.log(`Last digit of number 1 is = ${num11}`)
console.log(`Last digit of number 2 is = ${num22}`)

if(num11==num22){
    console.log("Both have same last digit");
}
else{
    console.log("Both do not have same last digit");
}