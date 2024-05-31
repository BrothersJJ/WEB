// question이라는 class를 가진 모든 요소를 questions에 저장
const questions = document.querySelectorAll(".question");

// 각 질문에 대한 반복
questions.forEach(function (question) {
  // class가 question-btn이라는 요소를 btn에 저장. 현재 질문의 버튼 선택
  const btn = question.querySelector(".question-btn");

  // 버튼을 누르면 click 이벤트 발생
  btn.addEventListener("click", function () {
    // 모든 질문에 대한 반복
    questions.forEach(function (item) {
      // 현재 질문(question)이 아닌 질문(item)에서는
      if (item !== question) {
        // 현재 질문이 아닌 item에서 class show-text 제거
        item.classList.remove("show-text");
      }
    });
    // 현재 질문(question)의 "show-text" 클래스를 토글. 없으면 넣고 있으면 제거
    question.classList.toggle("show-text");
  });
});

