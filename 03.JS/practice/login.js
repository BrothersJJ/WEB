const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN);
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

