// let form = document.querySelector(".form");
// let input1 = document.querySelector(".input1");
// let input2 = document.querySelector(".input2");
// let btn = document.querySelector(".btn")

// form.addEventListener("submit", (evt) => {
//     evt.preventDefault();
//     let bgColor = input1.value;
//     let bodyColor = input2.value;

//     document.body.style.backgroundColor = bgColor;
//     document.body.style.color = bodyColor;
// })



let bgColor = prompt("Enter body background color")
let bodyColor = prompt("Enter text background color")

document.body.style.backgroundColor = bgColor;
document.body.style.color = bodyColor;
