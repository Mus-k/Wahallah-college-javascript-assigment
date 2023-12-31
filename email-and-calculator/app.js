const email = document.querySelector(".email");
const form1 = document.querySelector(".form1");


// validating email function
function validateEmail(email) {
  const emailValue = email.toLowerCase().trim();
  const emailCheck =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailCheck.test(emailValue)) {
    console.log("Password Matched. Password validation Successful.");
  } else {
    console.log("Password didn't match. Password validation unsuccessful");
  }
}

// event listener on the form
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail(form1.email.value);
  form1.email.value = "";
});

// question 2 calculator

const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const checkAnswer = document.querySelector(".checkAnswer");
const calResult = document.querySelector(".calResult");
let result = null;

// switch case check
function calcutoFunc(operator, num1, num2) {
  if (
    !operator.value ||
    Number(num1.value) === "" ||
    Number(num2.value) === ""
  ) {
    alert("empty inputs are not allowed");
  } else if (operator.value.length > 1) {
    alert("choose only one operator");
  } else {
    switch (operator.value) {
      case "+":
        result = Number(num1.value) + Number(num2.value);
        console.log(
          `${Number(num1.value)} + ${Number(num2.value)} = ${result}`
        );
        break;

      case "-":
        result = Number(num1.value) - Number(num2.value);
        console.log(
          `${Number(num1.value)} - ${Number(num2.value)} = ${result}`
        );
        break;

      case "*":
        result = Number(num1.value) * Number(num2.value);
        console.log(
          `${Number(num1.value)} * ${Number(num2.value)} = ${result}`
        );
        break;

      case "/":
        result = Number(num1.value) / Number(num2.value);
        console.log(
          `${Number(num1.value)} / ${Number(num2.value)} = ${result}`
        );
        break;

      default:
        console.log("Invalid operator");
        break;
    }

    calResult.innerHTML=`<p>The result is: <span class='res'>${result}</span></p>`
  }
}

// event lister on the submit button
checkAnswer.addEventListener("click", () => {
  const operator = document.querySelector(".operator");

  calcutoFunc(operator, num1, num2);
  operator.value = "";
  num1.value = "";
  num2.value = "";
  

});
