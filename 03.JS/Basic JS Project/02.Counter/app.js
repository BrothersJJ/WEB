const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); // class명에 btn이 있는 모든 요소를 btns에 저장
let count = 0;

btns.forEach(function (btn) { // btns에 있는 각각의 버튼에 대해 해당 함수를 적용함
  console.log(btn);
  btn.addEventListener("click", function (e) { // 버튼을 클릭하면 이벤트가 발생하고 함수 실행
    const styles = e.currentTarget.classList; // 객체 styles에 현재 이벤트가 발생하는 target button의 class List를 저장
    console.log(e.target); // 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소를 반환. 내가 누른 요소 즉 버블링의 시초를 가져옴
    console.log(e.currentTarget); // 이벤트가 부착된 부모의 위치를 반환, 이벤트가 걸려있는 그 요소를 가져옴

    if (styles.contains("decrease")) { // 클릭된 버튼이 "decrease" class를 포함
      count--;
    } else if (styles.contains("increase")) { // 클릭된 버튼이 "increase" class를 포함
      count++;
    } else {
      count = 0;
    }

    // count에 따라 value 색 변경
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }

    value.innerText = count;
  });
});
