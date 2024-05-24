const toDoForm = document.querySelector("#todo-form"); // id 가 todo-form인 html 요소를 toDoForm에 저장
/* const toDoInput = document.querySelector("#todo-form input") */
const toDoInput = toDoForm.querySelector("input"); // 요소가 input인 html을 toDoInput에 저장
const toDoList = document.querySelector("#todo-list"); // id가 todo-list인 html 요소를 toDoList에 저장

const TODOS_KEY = "todos";  // "todos"를 저장한 TODOS_KEY 생성

let toDos = []; // list를 담을 배열 toDos 생성

// JSON.stringify()는 어느 object든 string으로 만들어줌
// JSON.parse()는 배열로 만들어줌
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // localStorage에 key를 "todos", value를 문자열로 바꾼 toDos로 저장함
}

function deleToDo(event) { // button을 눌렀을 때 실행되는 event
  const li = event.target.parentElement; // event가 실행되는 button의 부모인 li를 가져와서 li 객체에 저장
  li.remove(); // button 클릭 시 li를 지움
  // toDos 배열에는 다른 value도 있음. 삭제를 원하는 value 말고는 남겨두고 싶음.
  // 클릭한 li.id와 다른 toDo는 남겨두고 싶음
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // toDos 배열을 filter을 이용해 거름. toDo.id가 li.id와 다르면 web에 유지함. 같으면 지움. li.id는 String이므로 정수로 바꿔야 함
  saveToDos(); // saveToDos 실행
}
function paintToDo(newTodo) { // newTodo는 newTodoObj 또는 parsedToDos value임
  const li =document.createElement("li"); // <li></li>를 만들고 li 객체에 저장
  li.id = newTodo.id; // newTodo의 id를 li의 id에 저장
  const span = document.createElement("span"); // <span></span>을 만들고 span 객체에 저장
  span.innerText = newTodo.text; // newTodo의 text를 span의 innerText에 저장
  const button = document.createElement("button"); // <button></button>을 만들고 button 객체에 저장
  button.innerText = "❌"; // window . +을 button의 innerText에 저장
  button.addEventListener("click", deleToDo); // button에 click event를 주고 deleToDo 함수 실행
  li.appendChild(span); // span을 li의 자식 요소로 둠
  li.appendChild(button); // button을 li의 자식 요소로 둠
  toDoList.appendChild(li); // li를 toDoList의 자식 요소로 둠. id가 todo-list인 ul 아래에 li가 있고 li 안에 span과 button이 있음
}

function handleToDoSubmit(event) { // 실행된 이벤트가 event 객체에 있음
  event.preventDefault(); // 새로고침 되는 기본 실행을 막아줌
  const newTodo = toDoInput.value; // toDoInput에 작성된 list value를 newTodo에 저장
  toDoInput.value = ""; // value를 빈 문자열로 만들어줌. 엔터를 치고 나면 빈 공간이 되어야 함
  const newTodoObj = { // 각 value를 구분하기 위해 text와 id 속성으로 구분함. 특정 text를 넣고 지우기 위해 필요함
    text: newTodo, // text 속성에 newTodo value를
    id: Date.now(), // id 속성에 현재 시간을 밀리초로
  };
  toDos.push(newTodoObj); // 배열에 newTodoObj를 저정함. toDos = [{text: , id: }, { }, ...]
  paintToDo(newTodoObj); // paintToDo 함수에 newTodoObj를 넘겨줌
  saveToDos(); // saveToDos 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit); // toDoForm에 submit event를 만들고 handleToDoSubmit() 실행

const savedToDos = localStorage.getItem(TODOS_KEY); // localStorage에서 key가 "todos"인 value를 savedToDos에 저장

if (savedToDos !== null) { // localStorage에 value가 있으면
  const parsedToDos = JSON.parse(savedToDos); // 문자열 savedToDos를 array로 바꿈
  toDos = parsedToDos; // parsedToDos을 배열 toDos에 저장하도록 함. 새로 고침을 하여도 기존 value를 유지할 수 있음
  parsedToDos.forEach(paintToDo); // parsedToDos 배열에 있는 각 요소를 paintToDo에 각각 넣으면서 실행
}
