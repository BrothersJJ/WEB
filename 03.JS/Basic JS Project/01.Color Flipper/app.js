const arrays = ["green", "red", "rgba(133,122,200)", "#f15025"]; // 지정 색깔 배열

const whatColor = document.querySelector(".color"); // class명이 color인 html 요소를 whatColor에 저장
const button = document.querySelector("#btn"); // id가 btn인 html 요소를 button에 저장

function getRandomColor() { // arrays에서 색깔을 얻는 함수
  return arrays[Math.floor(Math.random() * arrays.length)]; // 무작위 반환
}

function changeBackgroundColor(event) { // 배경색 바꾸는 함수
  const color = getRandomColor(); // getRandomColor() 함수에서 color 얻음
  document.body.style.backgroundColor = color; // 배경화면 색을 color로 변경
  whatColor.innerText = `${color}`; // whatColor의 내부 text를 color로 변경
}

button.addEventListener("click", changeBackgroundColor); // 버튼 누르면 click 이벤트 실행
