// function isPalindrome(s) {
//   //   if (s[0] === s[s.length - 1]) {
//   //     console.log("saddasd");
//   //   }
//   let arrayValues = s.split("");
//   console.log("arrayValues " + arrayValues);
//   let reverse = arrayValues.reverse();
//   console.log(reverse);
//   if (reverse == arrayValues) {
//     console.log("It is a palindrome");
//   } else {
//     console.log("It is not a palindrome");
//   }
// }

// isPalindrome("rotor");

// move car
let speed = 10;
function keyup() {
  let element = document.getElementById("imgCar");
  element.style.top = parseInt(element.style.top) - speed + "px";
}
function keydown() {
  let element = document.getElementById("imgCar");
  element.style.top = parseInt(element.style.top) + speed + "px";
}
function keyleft() {
  let element = document.getElementById("imgCar");
  element.style.left = parseInt(element.style.left) - speed + "px";
}
function keyright() {
  let element = document.getElementById("imgCar");
  element.style.left = parseInt(element.style.left) + speed + "px";
  //
}
function ctrlKey() {
  window.addEventListener("keydown", function () {
    speed = 20;
  });
  window.addEventListener("keyup", function () {
    speed = 10;
  });
}

function moveSelection(evt) {
  switch (evt.key) {
    case "ArrowLeft":
      keyleft();
      break;
    case "ArrowRight":
      keyright();
      break;
    case "ArrowUp":
      keyup();
      break;
    case "ArrowDown":
      keydown();
      break;
    case "Control":
      ctrlKey();
      break;
  }
}

//random stone , coin
function stone() {
  document.querySelector(".stone").style.marginLeft =
    Math.floor(Math.random() * window.innerWidth - 100) + "px";
  document.querySelector(".stone").style.marginTop =
    Math.floor(Math.random() * 200) + "px";
}
function coin() {
  document.querySelector(".coin").style.marginLeft =
    Math.floor(Math.random() * window.innerWidth - 100) + "px";
  document.querySelector(".coin").style.marginTop =
    Math.floor(Math.random() * 200) + "px";
}
// Xử lý khi chạm phải chướng ngại vật
function impact() {
  let styleStorn = document.querySelector(".stone");
  let compStylesLeft = window
    .getComputedStyle(styleStorn)
    .getPropertyValue("margin-left")
    .slice(0, -2);
  let compStylesTop = window
    .getComputedStyle(styleStorn)
    .getPropertyValue("margin-top")
    .slice(0, -2);
  let myInterval = setInterval(function () {
    let styleCar = document.getElementById("imgCar");
    let compStylesCar = window
      .getComputedStyle(styleCar)
      .getPropertyValue("left")
      .slice(0, -2);
    let compTop = window
      .getComputedStyle(styleCar)
      .getPropertyValue("top")
      .slice(0, -2);
    if (
      +compStylesCar >= +compStylesLeft - 170 &&
      +compTop - 300 >= +compStylesTop
    ) {
      alert("Ban da thua");
      clearInterval(myInterval);
    }
  }, 500);
}
// Xử lý khi chạm vào coin
function point() {
  let count = 0;
  let styleStorn = document.querySelector(".coin");
  let compStylesLeft = window
    .getComputedStyle(styleStorn)
    .getPropertyValue("margin-left")
    .slice(0, -2);
  let compStylesTop = window
    .getComputedStyle(styleStorn)
    .getPropertyValue("margin-top")
    .slice(0, -2);
  let myInterval = setInterval(function () {
    let styleCar = document.getElementById("imgCar");
    let compStylesCar = window
      .getComputedStyle(styleCar)
      .getPropertyValue("left")
      .slice(0, -2);
    let compTop = window
      .getComputedStyle(styleCar)
      .getPropertyValue("top")
      .slice(0, -2);
    if (+compStylesCar >= +compStylesLeft - 170 && +compTop >= +compStylesTop) {
      document.getElementById("point").innerHTML = count;
      count++;
      point();
      clearInterval(myInterval);
    }
  }, 500);
}

function docReady() {
  window.addEventListener("keydown", moveSelection);
  stone();
  coin();
  impact();
  point();
}
