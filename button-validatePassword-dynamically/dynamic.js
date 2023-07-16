// 18. Change Text on Button click.
const toggleBtn = document.querySelector(".toggleBtn");
const heading = document.querySelector(".heading");

toggleBtn.addEventListener("click", () => {
  if (heading.textContent === "The most affordable learning platform") {
    heading.textContent = "PW Skills";
  } else {
    heading.textContent = "The most affordable learning platform";
  }
});

// 19. Validate Password

const form = document.querySelector(".form");
const message = document.querySelector(".message");
const email = document.querySelector(".email");
const Password = document.querySelector(".password");


const validFunc = (email, password) => {
  let isValid = true;

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    isValid = false;
  }
  if (password.length < 8) {
    isValid = false;
  }
  if (isValid) {
    message.textContent = "“Valid email and password!”";
    message.style.color = "green";
  } else {
    message.textContent = "“Invalid email or password!”";
    message.style.color = "red";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!email.value || !Password.value) {
    return;
  }
  validFunc(email.value, Password.value);

  email.value = "";
  Password.value = "";
});


//20. Dynamically Adding List Items to an Ordered List 

const addbtn =document.querySelector(".addBtn")
const listItem =document.querySelector(".listItem")
const arrayList=["item 1", "item 2","item 3", "item 4", "item 5"]
let currentIndex=0;
function addItems(){
 
    if(currentIndex<arrayList.length){
        const li= document.createElement("li");
        li.textContent=arrayList[currentIndex]
        listItem.appendChild(li);
        currentIndex++;
    } else{
        addbtn.disabled=true;
        alert("all items have been added.")
    }
}

addbtn.addEventListener("click", addItems)



















// const listItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

// const itemBtn=document.querySelector(".itemBtn");
// const itemList = document.querySelector(".itemList");

// let currentItemIndex = 0; // Index to keep track of the current item being added

// // Function to add the next item to the list
// function addItem() {
//   if (currentItemIndex < listItems.length) {
//     const newItem = document.createElement("li");
//     newItem.textContent = listItems[currentItemIndex];
//     itemList.appendChild(newItem);
//     currentItemIndex++;
//   } else {
//     itemBtn.disabled = true; 
//     alert("All items have been added!");
//   }
// }

//   itemBtn.addEventListener("click", addItem);