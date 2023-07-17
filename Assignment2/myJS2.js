// JAVASCRIPT_ASSIGNMENT-2__CHINMAY_BONDE

function primeCheck() {
  

  // CHECKING NO.
  var userInput = document.getElementById("inputNo").value;
  let itsPrime = 1;

  // Check if entered no. is 1
  if (userInput == 1) {
    alert("Entered no. is " + userInput + " and it is a NON PRIME ODD NUMBER");
    console.log(
      "Entered no. is " + userInput + " and it is NON a PRIME ODD NUMBER"
    );
  }

  // Check if entered no. is 2
  if (userInput == 2) {
    alert("Entered no. is " + userInput + " and it is an EVEN PRIME NUMBER");
    console.log(
      "Entered no. is " + userInput + " and it is an EVEN PRIME NUMBER"
    );
  }

  // Other numbers
  else if (userInput > 1) {
    for (let i = 2; i < userInput; i++) {
      if (userInput % i == 0) {
        itsPrime = 0;
        break;
      }
    }

    if (itsPrime == 1) {
      alert("Entered no. is " + userInput + " and it is a PRIME ODD NUMBER");
      console.log("Entered no. is " + userInput + " and it is a PRIME ODD NUMBER");
    } else {
      alert("Entered no. is " + userInput + " and it is a NON PRIME EVEN NUMBER");
      console.log(
        "Entered no. is " + userInput + " and it is a NON PRIME EVEN NUMBER"
      );
    }
  }
}
