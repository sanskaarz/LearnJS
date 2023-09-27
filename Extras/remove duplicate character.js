let str = "abcdabcdefgggh"
let word = "";
function removeRepeat(){
  for(let i=0;i<str.length;i++){
    let temp = str[i]
    if(word.indexOf(temp) == -1){
    word+=temp
    }
  }
}
removeRepeat();
console.log(word)