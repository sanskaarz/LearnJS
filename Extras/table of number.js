let num = prompt("Enter the number to get it's table")
function table(num){
  for(i=1 ;i<= 10;i++){
    console.log(`${num} * ${i} = ${num*i} `)
  }
}
table(num);