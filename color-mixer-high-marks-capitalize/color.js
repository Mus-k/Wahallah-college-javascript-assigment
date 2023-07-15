// color mixer
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const btn = document.querySelector(".btn");

function colorMixer(colorOne, colorTwo) {
  let color = "";
  if (!colorOne || !colorTwo) {
    alert("enter colors");
  } else {
    if (colorOne === "red" && colorTwo === "blue") {
      color = "purple";
    } else if (colorOne === "red" && colorTwo === "yellow") {
      color = "orange";
    } else if (colorOne === "blue" && colorTwo === "yellow") {
      color = "green";
    }
    switch (color) {
      case "purple":
        console.log("purple");
        break;
      case "orange":
        console.log("orange");
        break;
      case "green":
        console.log("green");
        break;
      default:
        console.log("invalid color chosen");
    }
  }
}

btn.addEventListener("click", () => {
  let colorOne = color1.value.trim().toLowerCase();
  let colorTwo = color2.value.trim().toLowerCase();
  colorMixer(colorOne, colorTwo);
  color1.value = "";
  color2.value = "";
});

// 4. Highest Marks
const array = document.querySelector(".arrays");
const marks = [60, 54, 80, 95, 70];
array.innerHTML += ` <span class='marks'>${marks}</span>`;
let higherMarks = marks.reduce((a, b) => {
  // tenary operator
  return a > b ? a : b;
});
document.getElementById(
  "result"
).innerHTML = `The highest marks is: <span class='marks mark'>${higherMarks}</span>`;
console.log(higherMarks);



// Capitalizing users first name of letter
const submit = document.querySelector(".submit");
const userValue = document.querySelector(".user");
const userName = document.querySelector(".userName");


function checkFirstLetter(user) {
  const toUpper= /^[a-z]/.test(user)
    ?user.charAt(0).toUpperCase() + user.slice(1)
    :user;
    userValue.innerHTML=`UserName: <span class='upper'>${toUpper}</span> `
    console.log(toUpper);
 
}

submit.addEventListener("click", () => {
  if (!userName.value) {
    alert("enter your name");
  } else {
    checkFirstLetter(userName.value);
  }
  userName.value = "";
});
