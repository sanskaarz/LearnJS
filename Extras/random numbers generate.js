function generateRandom(start,end){
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start}
// [start, end)
// start-end = diff


// From 21 to 25
console.log(Math.floor(Math.random() *5) +21)
// from 86 to 92
console.log(Math.floor(Math.random() *7) +86)