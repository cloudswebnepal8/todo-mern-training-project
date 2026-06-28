// // // variable declaration
// // // var name = "ajay";
// // // var name = "ajay kumar";
// // // let age = 25;
// // // let isStudent = true;
// // // let hobbies = ["reading", "coding", "traveling"]; 
// // // console.log(name,age,isStudent,hobbies)

// // // let student = {
// // //     name: "ajay",
// // //     age: 25,  
// // //     isStudent: true,
// // //     hobbies: ["reading", "coding", "traveling"]
// // // };
// // // console.log(student) 


// // // function sum(a, b) {
// // //     return a + b;
// // // } 
// // // let result = sum(5, 10);
// // // console.log("sum is :" + result)

// // // // Task
// // // // use arrow function to find square of a number
// // // let square = (num) => num * num;
// // // let number = 5;
// // // let squaredNumber = square(number);
// // // console.log("Square of " + number + " is: " + squaredNumber);


// // // operators in js
// // //arithmetic operators
// // let a = 10;
// // let b = 20;
// // let sum = a + b;
// // console.log("sum is :" + sum)
// // let difference = b - a;
// // console.log("difference is :" + difference)
// // let product = a * b;
// // console.log("product is :" + product)


// // //logical operators
// // let x = true;
// // let y = false;
// // console.log("x AND y is: " + (x && y));
// // console.log("x OR y is: " + (x || y));
// // console.log("NOT x is: " + !x);








// // //loops in js
// // //for loop 
// // // for (let i = 0; i < 10; i++) {
// // //     console.log("for loop iteration: " + i);
// // // }


// // const marks = [15, 92, 78, 96, 88, 90];
// // for (let i = 0; i < marks.length; i++) {
// //     if (marks[i] >= 40) {
// //         console.log("Pass ", marks[i]);
// //     }
// //     else {
// //         console.log("Fail", marks[i]);
// //     }
// // }

// // //while loop
// // let i = 0;
// // while (i < 10) {
// //     console.log("while loop iteration: " + i);
// //     i++;
// // }


// // let attempts = 0;
// // while (attempts < 3) {
// //     console.log("Trying Login....");
// //     attempts++;
// // }
// // console.log("Account locked")

// // // conditional statement in js
// // //if statement and if-else statement
// // let age = 10;
// // if (age >= 18) {
// //     console.log("You can vote ")
// // }
// // else {
// //     console.log("you cannot vote")
// // }

// // // Q.create a program that checks 
// // // a.if user has enough balance 
// // // b.if yes then allow withdrawal
// // // else show insufficient balance

// // // Q2. if else-if else
// // //     marks>=80-distinction 
// // //     marks>=60-first division 
// // //     marks>=50-second division 
// // //     marks<50-fail 


// // let day = Number(prompt("Enter day number from 1-7"))
// // switch (day) {
// //     case 1:
// //         alert("sunday");
// //         console.log("sunday")
// //         break;
// //     case 2:
// //         alert("Monday");
// //         console.log("Monday")
// //         break;
// //     case 3:
// //         console.log("Tuesday");
// //         break;
// //     case 4:
// //         console.log("Wednesday");
// //         break;
// //     case 5:
// //         console.log("Thursday");
// //         break;
// //     case 6:
// //         console.log("Friday");
// //         break;
// //     case 7:
// //         console.log("Saturday");
// //         break;
// //     default:
// //         console.log("Invalid input")

// // }

// // // tasks for switch case
// // // 1.Display order status based on user input
// // // conditions:
// // // cases => "ordered","preparing","delivered" and "cancelled"

// // // 2.Traffic signal system
// // // show action based on traffic light color 

// // // 3.Bank transaction system 
// // // perform action based on transaction type
// // // condition 
// // // deposit,withdraw,balance,transer=>cases 

// // let fruits = ["apple", "orange", "banana"];
// // // console.log(fruits[0])
// // fruits.forEach((fruit, index) => {
// //     console.log(index + ":" + fruit)
// // }
// // )

// // let nums = [1, 2, 3, 4, 5, 6, 7];
// // let result = nums.filter((num) => {
// //     return num % 2 === 0;

// // })
// // console.log(result)

// // tasks
// // Q1.You have a list of students with marks.
// // print all students and display only students who passed(marks >= 40)

// // Q2.convert product price from NPR to USD (assume 1 usd=149 NPR)
// // Q3. Create an array named foodItems and display only veg items   

// // const foodItems = [
// //     {
// //         name: "Momo",
// //         type: "non-veg"
// //     },
// //     {
// //         name: "chowmein",
// //         type: "veg"
// //     },
// //     {
// //         name: "sausage",
// //         type: "non-veg"
// //     },
// //     {
// //         name: "Fish curry",
// //         type: "non-veg"
// //     }
// // ];
// // for (let item of foodItems) {
// //     if (item.type === "non-veg") {
// //         console.log(item.name)
// //     }

// // }


// const user = {
//     name: "ajay",
//     email: "jajay7941@gmail.com",
//     age: 25
// };
// console.log(user.name)

// user.address = "Bhaktapur"
// console.log(user)

// user.email = "cloudswebnepal8@gmail.com"
// console.log(user)

// delete user.age;
// console.log(user)

// //object with function (method)
// const users = {
//     name: "ajaya",
//     greet: function () {
//         return `Hello,${this.name}`;
//     }
// };
// console.log(users.greet())

// //nested object
// const order = {
//     id: 101,
//     user: {
//         name: "ajay",
//         address: "bkt"
//     }
// };
// console.log(order.user.name)

// //object destructuring
// const userdata = {
//     names: "ajayshrestha",
//     email: "jajay79410@gmail.com"
// };
// // const name = userdata.name;
// // const email = userdata.email;
// const { names, email } = userdata
// console.log(email)


// //spread operator in object
// const datas = {
//     name: "ajay"
// };
// const updateduser = {
//     ...datas, age: 22,address:"bkt"
// }
// console.log(updateduser)


//synchronous and asynchronous operation in js

//synchronous operation
// console.log("start");
// console.log("processing")
// console.log("end");

//asynchronous operation
// console.log("start");  //notepad
// setTimeout(() => {
//     console.log("processing")   //vscode background execute and process continue to next task
// }, 2000);
// console.log("end")       //file explorer


//synchronous in js another example
// console.log("start");
// function task() {
//     for (let i = 0; i < 1000000; i++) { }
//     console.log("task completed")
// }
// task();
// console.log("End")

// synchronous in js another example
// function getData() {
//     return "Data loaded"
// }
// console.log("start")

// const result = getData();
// console.log(result)

// console.log("end")

//asynchronous style 

// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("User Data")
//         }, 2000)
//     })
// }
// console.log("Fetching");

// getUser().then((data) => {
//     console.log(data)

// })
// console.log("Finished")

//promise in js
// const myPromise = new Promise((resolve, reject) => {
//     let success = false;
//     if (success) {
//         resolve("Promise resolved successfully")
//     }
//     else {
//         reject("Promise rejected")
//     }
// });
// myPromise.then((message) => {
//     console.log(message)
// }).catch((error) => {
//     console.error(error)
// })

//promise with setTimeout

// const loginUser = new Promise((resolve, reject) => {
//     const isLoggedIn = false;
//     setTimeout(() => {
//         if (isLoggedIn) {
//             resolve("User logged in successfully")
//         }
//         else {
//             reject("Login failed")
//         }
//     }, 2000);

// })

// console.log("Checking login")

// loginUser.then((message) => {
//     console.log(message)
// })
//     .catch((error) => {
//         console.log(error)

//     })


//tasks
//1.Ecommerce product Delivery system
//A customer orders a product from an ecommerce website.
//The system:
//a.checks stock
//b.processes payment
//c.arranges delivery
// Each step takes time, so promise must be used

//multiple promises in js
// promise.all
// const p1 = Promise.reject("Promise 1 rejected")
// const p2 = Promise.resolve("Promise 2 resolved")
// const p3 = Promise.reject("Promise 3 rejected")
// Promise.all([p1, p2, p3]).then((result) => {
//     console.log(result)
// })
//     .catch((error) => {
//         console.error(error)
//     })


//promise.race
// const p1 = new Promise((resolve) => {

//     setTimeout(() => {
//         resolve("Fast API")

//     }, 3000);
// })

// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("slow api first")

//     }, 2000);

// })

// const p3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("slow api")

//     }, 2000);

// })
// Promise.race([p1, p2,p3])
//     .then((result) => {
//         console.log(result)

//     })

//promise.allsettled
const p1 = Promise.resolve("Order success");
const p2 = Promise.reject("Order failed.");
Promise.allSettled([p1, p2])
    .then((result) => {
        console.log(result)
    })

//promise.any