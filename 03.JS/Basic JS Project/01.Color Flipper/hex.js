const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // 색깔을 조합하기 위한 배열
const button = document.querySelector("#btn"); // id가 btn인 html 요소를 button에 저장
const whatColor = document.querySelector(".color"); // class가 color인 html 요소를 whatColor에 저장

function getRandomColor() { // 무작위 색깔 조합을 얻어내기 위한 함수
  return hex[Math.floor(Math.random() * hex.length)]; // 배열에서 얻어냄
}

function changeBackgroundColor(event) { // 배경색 바꾸는 함수
  let hexColor = "#"; // hex 조합을 위해 hexColor 객체의 첫 글자는 #

  for (let i = 0; i < 6; i++) { // 6글자여서 6번 반복
    hexColor += getRandomColor(); // getRandomColor 함수를 6번 시도해 얻은 String을 hexColor에 붙임
  }

  whatColor.innerText = hexColor; // whatColor의 내부 text는 hexColor
  document.body.style.backgroundColor = hexColor; // 배경색은 hexColor
}

button.addEventListener("click", changeBackgroundColor); // button을 누르면 click 이벤트 실행
