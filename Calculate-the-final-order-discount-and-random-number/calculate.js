// 14. Calculate the final order price
const cartItem = [
  {
    id: 1,
    price: 12,
    quantity: 2,
  },
  {
    id: 2,
    price: 7,
    quantity: 4,
  },
  {
    id: 3,
    price: 19,
    quantity: 1,
  },
];
const CalculateFinalOrderPrice = (cartItem) => {
  const totalcost = cartItem.reduce((previous, current) => {
    return previous + current.price * current.quantity;
  }, 0);

  console.log(`The total cost is= $${totalcost}`);
};
CalculateFinalOrderPrice(cartItem);

// discount price percentage
const originalPrice = 100;
const discountedPrice = 70;
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  const discountAmount = originalPrice - discountedPrice;
  const discountPercentage = (discountAmount / originalPrice) * 100;
  const roundedDiscountPercentage = Math.round(discountPercentage * 100) / 100; // Round off to two decimal places
  return roundedDiscountPercentage;
};

const disPercentage = calculateDiscountPercentage(
  originalPrice,
  discountedPrice
);
console.log(`discount percentage is: ${disPercentage}%`);

// 16. Generate a random number
const answer = document.querySelector(".answer");

(() => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  answer.innerHTML = `random number is:<span class='random'>${randomNumber}</span> `;
})();

//   17. Build a banking application
const depositedAmount = document.querySelector("#bankdeposit");
const withdrawing = document.querySelector(".withdraw");
const wbtn = document.querySelector(".wbtn");
const dbtn = document.querySelector(".dbtn");
const customerName = document.querySelector(".name");
const balance = document.querySelector(".balance");

// object method// Customer object

const customer = {
  name: "Musah Kamarah",
  balance: 5000,

  deposit: function (amount) {
    if (amount > 0) {
      this.balance += amount;
      balance.innerHTML = `Your blance is: <span class='b'>$${this.balance}</span>`;
    } else {
      alert("invalid amount for  deposit");
    }
  },
  withdraw: function (amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      balance.innerHTML = `Your blance is: <span class='b'>$${this.balance}</span>`;
    } else {
      alert("Insufficient balance or invalid amount for withdrawal.");
    }
  },
};

balance.innerHTML = `Your blance is: <span class='b'>$${customer.balance}</span>`;
customerName.innerHTML = `Name: ${customer.name}`;
dbtn.addEventListener("click", () => {
  if (!Number(depositedAmount.value)) {
    alert("enter your amount");
  } else {
    customer.deposit(Number(depositedAmount.value));
  }
  depositedAmount.value = "";
});

wbtn.addEventListener("click", () => {
  if (!Number(withdrawing.value)) {
    alert("enter your amount");
  } else {
    customer.withdraw(Number(withdrawing.value));
  }
  withdrawing.value = "";
});
