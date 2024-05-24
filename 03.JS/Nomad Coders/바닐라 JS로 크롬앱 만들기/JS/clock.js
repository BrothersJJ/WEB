const clock = document.querySelector("h2#clock"); // html 태그 h2 id="clock"을  clock에 저장

function getClock() {
  const date = new Date(); // 현재 시간을 date에 저장
  // padStart.(2, "0") 글자가 2글자가 아니면 앞에 0을 넣어 글자 수 맞춤
  const hours = String(date.getHours()).padStart(2, "0"); // hour을 String으로 바꾼 다음 2글자가 아니면 앞에 "0" 추가
  const minutes = String(date.getMinutes()).padStart(2, "0"); // minute을 String으로 바꾼 다음 2글자가 아니면 앞에 "0" 추가
  const seconds = String(date.getSeconds()).padStart(2, "0"); // second을 String으로 바꾼 다음 2글자가 아니면 앞에 "0" 추가
  clock.innerText = `${hours}:${minutes}:${seconds}`; // clock의 innerText로 00:00:00 저장
}

getClock(); // website가 load되자마자 getClock()을 실행하고 또 매초마다 다시 실행되도록
setInterval(getClock, 1000); // 1초의 간격마다 getClock 실행
