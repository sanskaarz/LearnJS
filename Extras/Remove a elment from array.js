let arr = [1, 2, 3, 4, 5, 6, 2, 3]
let num = prompt("Enter the number, u want to remove")

// Method 1
let arrNew = []
for(let x of arr){
  if(num!==x){
    arrNew.push(x)
  }
}
console.log(arrNew)


// Method 2
for (i=0;i<arr.length;i++) {
  if (arr[i] ==  num) {
    arr.splice(i, 1)
  }
}
console.log(arr)