// Date ----> 01/06/2024

// Task Number 01

// var trafficLightColor = prompt("Please Enter traffic light color");
// // if ( trafficLightColor === "red" ) {
// //     alert("stop")
// // } else if ( trafficLightColor === "green" ) {
// //     alert("go")
// // } else if ( trafficLightColor === "yellow" ) {
// //     alert("ready")
// // } else {
// //     alert("wrong color");
// // }

// if ( trafficLightColor === "red" ) 
//     alert("Stop");
// else if ( trafficLightColor === "green" )
//     alert("Go");
// else if ( trafficLightColor === "yellow" )
//     alert("Ready");
// else {
//     alert("Wrong color");
// }



// //  Task Number 02

// var shopping = +prompt("Please enter total shopping payments");
// if ( shopping <= 4999 ) {
//     alert(" 10% Discount is required");
// } else if ( shopping >= 5000 && shopping <= 10000) {
//     alert(" 25% Discount is required");
// } else if ( shopping > 10000 ) {
//     alert(" 50% Discount is required");
// }


// ###############################################################################
// Date ----> 02/06/2024

// // 1. Check for Rain 
// var badals = +prompt("Please enter details of the weather \n  Please enter the number \n 1.  Badal hy. \n 2.  Badal nhe hy.");
// if (badals === 1 || badals === "Badal hy") {
//     alert("Barish hogi");
// } else if (badals === 2 || badals === "Badal nhe hy") {
//     alert("Barish nahi hogi");
// }

// #--------------------------------------------------------------------------------#

// // 2. Check Balance on BRT Card
// var brtCard = +prompt("Please enter balance on BRT Card");
// if (brtCard >= 50) {
//     alert("Ja skty ho")
// } else if (brtCard < 50) {
//     alert("Nahi ja skty");
// }

// #--------------------------------------------------------------------------------#

// // // 3. Check if You Can Buy a Burger
// // Pre-defined values 
// // var burgerKeemat = 100; // Price of the burger
// // var jebMePesy = 150; // Money in your pocket

// // User input values
// var burgerKeemat = +prompt("Enter price of the burger");
// var jebMePesy = +prompt("Enter your pouket money");

// if (jebMePesy >= burgerKeemat) {
//     alert("Burger lelo");
// } else {
//     alert("Dafa ho jao yr hhh");
// }

// #---------------------------------------------------------------------------------#

// // 4. Check if a Number is Odd or Even
// var number = +prompt("Enter the Number : "); // Enter the number to check
// if (number % 2 === 0) {
//     alert("The number is even");
// } else {
//     alert("The number is odd");
// }

// #---------------------------------------------------------------------------------#

// // 5. Calculate Total Bill for Two Items in a Fruit Shop
// var item1Price = +prompt(" 1. Enter the price of the first item"); 
// var item2Price = +prompt(" 2. Enter the price of the second item");
// var totalItems = 2;
// var totalBill = (item1Price + item2Price) * totalItems;
// alert("Total bill is: " + totalBill);

// #---------------------------------------------------------------------------------#

// // 6. Traffic Light Instructions
// var trafficLight = prompt("Enter the traffic light color (red, blue, yellow):");
// if (trafficLight === "red") {
//     alert("Stop!");
// } else if (trafficLight === "blue") {
//     alert("Go!");
// } else if (trafficLight === "yellow") {
//     alert("Ready!");
// } else {
//     alert("Invalid color");
// }

// #--------------------------------------------------------------------------------#

// // 7. Discount Based on Number of Items Purchased
// var itemsPurchased = +prompt(" Enter the number of items purchasjed : ");
// var discount;
// if (itemsPurchased > 10) {
//     discount = 20;
// } else if (itemsPurchased >= 5 && itemsPurchased <= 9) {
//     discount = 10;
// } else {
//     discount = 0;
// }
// alert("You get a " + discount + "% discount.");

// #--------------------------------------------------------------------------------#

// // 8. Atm  Bank Balance and Withdrawal Check
// var bankBalance = +prompt(" Enter your bank balance : ");
// var withdrawAmount = +prompt(" Enter the amount you want to withdraw : ");
// if (bankBalance >= withdrawAmount) {
//     alert("Here is your money");
// } else {
//     alert("Itny paisy daly nhe jitna Mang rhe ho yr");
// }
