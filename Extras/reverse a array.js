// Using concat()

let arr = [1, 2, 3, 4, 5]
let output = []
for (i = 1; i <= arr.length; i++) {
  let adam = arr[arr.length - i]
  output = output.concat(adam)
}
console.log(output)


// Using push()

let arr = [1, 2, 3]
output = []
for (i = arr.length - 1; i >= 0; i--) {
  output.push(arr[i])
}
console.log(output)

// Using reverse()
arr.reverse()



// Using For Of loop


let string = "Sanskar"
let str = ""
for (let x of string) {
  str = x + str
}
console.log(str)
