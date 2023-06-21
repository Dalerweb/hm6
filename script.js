let name = prompt("What is your name?");
let account = prompt("Card number");
let balance = 10000;

if (name === "Alex" && account === "7777") 

{
  let amount = parseInt(prompt("Summ"));

  if (amount <= balance) {
    balance -= amount;
    console.log("Taken $" + amount);
    console.log("Remaining $" + balance);
  } else {
    console.log("Insufficient funds");
  }
} else {
  console.log("User not found");
  
}


