// JAVASCRIPT_ASSIGNMENT-4__CHINMAY_BONDE

function validate() {

  // INPUT VALIDATION
  let x = document.getElementById("inputNo1").value;
  let y = document.getElementById("inputNo1").value;
  let enterNoValidation;
  if (isNaN(x, y)) {
    alert((enterNoValidation = "Invalid input. Please Enter a Valid Number"));
  }
}

// ADDITION
function add() {
  var userInput1 = parseInt(document.getElementById("inputNo1").value);
  var userInput2 = parseInt(document.getElementById("inputNo2").value);

  document.getElementById("answer").innerHTML = userInput1 + userInput2;
}

// SUBTRACTION
function sub() {
  var userInput1 = parseInt(document.getElementById("inputNo1").value);
  var userInput2 = parseInt(document.getElementById("inputNo2").value);
  
  document.getElementById("answer").innerHTML = userInput1 - userInput2;
}

// MULTIPLICATION
function mul() {
  var userInput1 = parseInt(document.getElementById("inputNo1").value);
  var userInput2 = parseInt(document.getElementById("inputNo2").value);

  document.getElementById("answer").innerHTML = userInput1 * userInput2;
}

// DIVISION
function divi() {
  var userInput1 = parseInt(document.getElementById("inputNo1").value);
  var userInput2 = parseInt(document.getElementById("inputNo2").value);

  document.getElementById("answer").innerHTML = userInput1/userInput2;
}
