// JAVASCRIPT_ASSIGNMENT-3__CHINMAY_BONDE

// INPUT VALIDATION
function Validation() {
  
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }

  
}
