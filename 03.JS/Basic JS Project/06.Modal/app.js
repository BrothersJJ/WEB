// 해당 클래스를 가진 요소를 객체에 저장
const modalBtn = document.querySelector(".modal-btn");
const overlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

// modalBtn을 누르면 click 이벤트 실행
modalBtn.addEventListener("click", function () {
  overlay.classList.add("open-modal"); // overlay 요소에 클래스 open-modal 추가
});

// closeBtn을 누르면 click 이벤트 실행
closeBtn.addEventListener("click", function () {
  overlay.classList.remove("open-modal"); // overlay 요소에 클래스 open-modal 제거
});
