let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer == '' || attempt == ''){
      setHiddenFields();
    }
}

//implement new functions here
function setHiddenFields(){
  answer = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;

  //answer = Math.floor(Math.random() * 9999);
  answer.toString();
  while(answer.length < 4){
    answer = '0' + answer;
  }
  attempt = 0;
}
function setMessage(label){
   document.getElementById('message').innerHTML()
}


function validateInput(input){
  if(input.length == 4){
    return true;
    console.log();
  }else{
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}
setHiddenFields();
