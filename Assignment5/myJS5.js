// JAVASCRIPT_ASSIGNMENT-5__CHINMAY_BONDE

const userText = function () {

var text = document.getElementById('userInput').value

  let s = text.split("");

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "":
        break;

      case "z":
        s[i] = "a";

      case "Z":
        s[i] = "A";

      default:
        // console.log(s[i]);
        s[i] = String.fromCharCode(s[i].charCodeAt()+1);
    }
  }
  // return s.join("");
  // alert(s.join(""))
  document.getElementById("answer").innerHTML=s.join("")
};

// console.log(userText("ABC"));

