// vowels counter
const vowelCount = document.querySelector(".vowels");
const vowelbtn = document.querySelector(".btnVowel");
const userName = document.querySelector(".username");

function vowelCounter(name) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name[i])) {
      count++;
    }
  }
  vowelCount.innerHTML = `Number of vowels is:<span class='number'>${count}</span>`;
}

vowelbtn.addEventListener("click", () => {
  if (!userName.value) {
    alert("enter your name");
  } else {
    vowelCounter(userName.value);

    userName.value = "";
  }
});

// remove duplicate

const without = document.querySelector(".without");

const cartItems = [
  "apple",
  "apple",
  "orange",
  "orange",
  "eggplant",
  "cucumber",
];

function removeDuplicate(items) {
  const cart = [];

  items.forEach((item) => {
    if (!cart.includes(item)) {
      cart.push(item);
    }
  });
  return cart;
}
const result = removeDuplicate(cartItems);
console.log(result);
without.innerHTML = `Cart without duplicates= <p class='nonDvalue'>${result}</p>`;

// inverted right

function invertedRight(n) {
  for (let i = n; i >= 1; i--) {
    let res = "";
    for (let j = 1; j <= i; j++) {
      res += "*";
    }
    console.log(res);
  }
}
invertedRight(6);

// divisible
const divisible = document.querySelector(".divisible");

const numbers = [1, 3, 4, 5, 22, 6, 8, 9, 12, 15];

function divisibleFunc(n) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 3 === 0 && n[i] % 2 !== 0) {
        console.log(n[i]);
    divisible.innerHTML += `<span class='divided'>${n[i]}</span>,`;
    } else {
      continue;
    }
  }
}
divisibleFunc(numbers);
