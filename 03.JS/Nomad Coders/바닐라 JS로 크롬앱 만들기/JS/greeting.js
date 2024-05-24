/*
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

const loginForm = document.querySelector("#login-form"); // id가 login-form인 HTML 요소를 찾아 loginForm에 저장
const loginInput = document.querySelector("#login-form input"); // id가 login-form인 input 태그인 html 요소를 찾아 loginInput에 저장
const greeting = document.querySelector("#greeting"); // id가 greeting인 htmdl 요소를 찾아 greeting에 저장

const HIDDEN_CLASSNAME = "hidden"; // hidden이라는 String을 대문자로 저장
const USERNAME_KEY = "username";  // username이라는 String을 대문자로 저장

function onLoginSubmit(event) { // submit event 실행
  event.preventDefault(); // 기본동작이 실행되는 것을 막음. 여기에서는 새로고침되는 것을 막음.
  loginForm.classList.add(HIDDEN_CLASSNAME); // 엔터를 누르면 loginForm가 가리키는 태그에 class명이 hidden인 것을 추가함. login-form을 web에서 숨김.
  const username = loginInput.value; // loginInput 값을 username에 저장함. 예를 들어 nico를 작성하고 엔터를 누르면 nico가 username에 저장됨.
  localStorage.setItem(USERNAME_KEY, username); // localStorage에 key가 "username", value가 const username을 저장함. nico가 value가 됨.
  paintGreetings(username); // paintGreetings(nico)를 호출함
}

function paintGreetings(username) { // username은 nico
  greeting.innerText = `Hello ${username}`; // id가 greeting인 html 요소의 내부를 Hello nico로 저장함.
  greeting.classList.remove(HIDDEN_CLASSNAME); // id=greeting인 html 요소에 있는 class="hidden"을 삭제함. 삭제하면 innerText가 web에 보임.
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // localStorage에서 key가 username인 value를 savedUsername에 저장함. nico를 저장함.

if (savedUsername === null) { // localStorage에 아무것도 없으면 null이 나옴.
  // show the form. 저장된 localStorage가 없으므로 로그인 창을 띄워줌. loginForm을 web에 표시해줌.
  loginForm.classList.remove(HIDDEN_CLASSNAME); // loginForm의 hidden을 없애서 web에 표시해줌.
  loginForm.addEventListener('submit', onLoginSubmit); // 버튼을 누르면 submit event를 발동시키고 onLoginSubmit 함수를 실행.
} else { // localStorage에 value가 있으면
  // show the greeting
  paintGreetings(savedUsername); // 바로 paintGreetings 함수를 실행시켜 innerText를 web에 띄움. loginForm을 web에서 숨김.
}

// login-form과 greeting에 class로 hidden을 주는 이유는 원하는 타이밍에 hidden을 없애 web에 표시하도록 하기 위함.
// form과 input이 함께 있으면 submit 시 새로고침이 되므로 preventDefault()를 써서 막아야 함.
// input에 required는 필수로 값을 넣어야 함, 최대 길이 15, 빈 공간일 때는 안에 placeholder가 나오게 함.
