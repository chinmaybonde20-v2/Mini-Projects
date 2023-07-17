// JAVASCRIPT_ASSIGNMENT-1__CHINMAY_BONDE

function primeCheck() {
  // INPUT VALIDATION
  let x = document.getElementById("inputNo").value;
  let enterNoValidation;
  if (isNaN(x)) {
    alert((enterNoValidation = "Invalid input. Please Enter a Valid Number"));
  }

  // Calculate Prime Numbers
  var userInput = document.getElementById("inputNo").value;
  const emptyArray = [];

  for (let i = 1; i <= userInput; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    if (i > 1 && flag == 0) {
      emptyArray.push(i);
      document.getElementById("outputJS").innerHTML = emptyArray;
    }
  }
}
