// Using concat()

let arr = [1,2,3,4,5]
let output = []
for (i= 1 ; i<=arr.length;i++ ){
let adam = arr[arr.length-i]
output = output.concat(adam)
}
console.log(output)


// Using push()

let arr = [1,2,3]
output = []
for(i= arr.length-1 ; i>=0; i--){
output.push(arr[i])
}
console.log(output)

// Using reverse()
