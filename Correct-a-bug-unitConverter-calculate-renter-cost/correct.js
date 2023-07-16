// correct a bug

const currentValue = document.querySelector(".current");

const array = [1, 2, 3, 4, 5];

function arrayFunc(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const doubled = element * 2;

    output.push(doubled);
  }
  return output;
}

const result = arrayFunc(array);
console.log(result);
currentValue.innerHTML = `correct value are= <span class='result'>${result}</span>`;

// 11 unit converter
const fahrenheit = document.querySelector(".fahrenheit");
const celsius = 25;
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

const c = celsiusToFahrenheit(celsius);
console.log("fahrenheit= ", c);
fahrenheit.innerHTML = ` fahrenheit = ${c}`;

// 12. Calculate rental cost

const days = document.querySelector(".days");
const carType = document.querySelector(".carType");
const btn = document.querySelector(".btn");
const totalcash = document.querySelector(".totalcash");
function rentalCost(days, carType) {
  let perday = null;
  if (carType === "Economy") {
    perday = 4000;
  } else if (carType === "Midsize") {
    perday = 10000;
  } else if (carType === "Luxury") {
    perday = 20000;
  } else {
    alert("invalid carType");
    window.location.reload();
  }

  let totalCost = perday * days;

  totalcash.innerHTML = `<p>total cost is = Rs. <span class='detail'>${totalCost}</span></p> <p>car type is <span class='detail'>${carType}</span> </p> 
<p> number of days rented is= <span class='detail'>${days}</span>.</p>`;
  console.log(
    `total cost is =Rs. ${totalCost}  carType ${carType} number of day ${days}.`
  );
}

btn.addEventListener("click", () => {
  let day = Number(days.value);
  if (!day || !carType.value) {
    alert("please enter day in number");
  } else {
    rentalCost(day, carType.value);
  }
});

// bill splitter
const numofpeople = 4;
const costPerDish = [14, 20, 30, 10];

function billSplitter(person, cost) {
  const totalCost = cost.reduce((previous, current) => {
    return previous + current;
  }, 0);

  const costPerPerson = totalCost / person;

  const Obj = {
    totalBill: totalCost,
    billPerson: costPerPerson,
  };
  console.log("object result", Obj);
}

billSplitter(numofpeople, costPerDish);
