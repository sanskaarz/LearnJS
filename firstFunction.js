function eligiblity(age){
    if(age >=18){
      console.log("you are eligible to vote");
    }
    else{
      console.log("you are not eligible to vote");
    }
  }
  
eligiblity(prompt("enter age"));