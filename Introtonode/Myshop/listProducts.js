var fake = require("faker");

console.log("===================");
console.log("Welcome to My Shop");
console.log("===================");

for(var i =0; i <= 10; i++)
{
    var product = fake.commerce.productName();
    var price = fake.commerce.price();
    console.log(product + " - $"+ price);
}