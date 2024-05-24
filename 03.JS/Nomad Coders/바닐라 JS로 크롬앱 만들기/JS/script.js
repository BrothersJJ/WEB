console.log("lllll");

const a = 5;
const b = 2;

console.log(a + b);
console.log(a / b);

let myName = "dolphin";
console.log('Hello ' + myName);

myName = "Wu Jin";
console.log('your new name ' + myName);

const amIFat = null;
let something;
console.log(amIFat);
console.log(something, amIFat);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek);
console.log(daysOfWeek[4]);

daysOfWeek.push("sun");
console.log(daysOfWeek);

const player = {
  name: "nico",
  points: 121212,
  handsome: false,
  fat: "little bit",
};
console.log(player.name);
console.log(player["name"]);

player.fat = false;
console.log(player.fat);
// const 안에 있는 property를 수정할 수 있음

player.lastName = "potato";
console.log(player.lastName);

player.points = 10;
console.log(player);

function sayHello(name, age) {
  console.log("Hello " + name + ", " + age);
}
sayHello("nico", 10);

function plus(a, b) {
  console.log(a + b);
}
function divide(a, b) {
  console.log(a / b);
}
plus(8, 60);
divide(50, 10);

const player2 = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " Nice to meet you");
  },
};
player2.sayHello("lynn");

const player3 = {
  name: "Nico",
  age: 9,
};

function minusFive(potato) {
  console.log(potato - 5);
}
minusFive(10, 20, 30, 40, 50);

const calculator = {
  add: function (a, b) {
    return a + b;
  },
};
let data = calculator.add(5, 1);
console.log(data);

const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}
const krAge = calculateKrAge(age);
console.log(krAge);


const age2 = parseInt(prompt("How old are you?"));
if (isNaN(age2)) {
  console.log("Please write a Number");
} else if (age2 < 18){
  console.log("You are too young");
} else if (age2 >= 18 && age2 <= 50) {
  console.log("You can drink");
} else {
  console.log("You can drink");
}

document.title = "Hello JS";

const title = document.getElementById("title");
// const title = document.querySelector('#hello');
console.dir(title);

title.innerText = "Got you";

console.log(title.id);
console.log(title.className);

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const titles = document.getElementsByTagName("h1");
console.log(titles);

const a = document.querySelector(".hellos h1");
console.log(a);

const b = document.querySelectorAll(".hellos h1");
console.log(b);

const c = document.querySelector("div.hi h1");
console.dir(c);
c.style.color = "blue";

const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);
function handleTitleClick() {
  h1.style.color = "blue";
  console.log("title was clicked");
}

function handleMouseEnter() {
  console.log("mouse is here");
  h1.innerText = "mouse is here";
}

function handleMouseLeave() {
  console.log("mouse is gone");
  h1.innerText = "mouse is gone"
}

h1.onclick = handleTitleClick;
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOD");
}

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }

  h1.style.color = newColor;
}

h1.onclick = handleTitleClick;


const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "active";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.onclick = handleTitleClick;


const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "active";
  h1.classList.toggle(clickedClass);
}
/*
toggle function : class name이 존재하는지 확인함.
만약 class name이 존재한다면 toggle은 class name을 제거한다.
class name이 존재하지 않는다면 toggle은 class name을 추가한다.
 */

h1.onclick = handleTitleClick;
