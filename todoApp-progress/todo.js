// 22. Progress Bar
//Create a progress bar that fills up as the user scrolls down the page.

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  const scroll = scrollHeight - clientHeight;
  const progress = (scrollTop / scroll) * 100;
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = progress + "%";
});

/* 23. Change the color on click
Create a button that utilizes an array of colors and the Math.random method to change the background color
of the page upon clicking.  
*/
const colors = ["#FF0000", "#00FF00", "#0000FF", "#FF00FF", "#FFFF00"];
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const body = document.body;
  body.style.backgroundColor = colors[randomIndex];
});

// 24. Text Highlighting
const paragraph = document.getElementById("paragraph");
const words = paragraph.textContent.split(" ");

for (var i = 0; i < words.length; i++) {
  var word = words[i];

  //condition
  if (word.length > 8) {
    words[i] = `<span style="background-color: yellow;">${word}</span>`;
  }
}
paragraph.innerHTML = words.join(" ");

// todo

// todo list
const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");
const required = document.querySelector(".required");

inputBox.addEventListener("keyup", () => {
  required.style.display = "none";
});

function addTask() {
  if (inputBox.value === "") {
    required.style.display = "block";
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

const showData = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};

showData();