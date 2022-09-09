const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "ToDos";

let toDos = []; // 프로그램이 시작할 때 빈값으로 시작하는 대신 const를 -> let으로 변경해서 업데이트 가능하도록 만든다.

function saveToDos() {
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // Javascript의 어떤 코드건 상관없이 string으로 만들어준다
}

function deleteToDo(event) {
   const li = event.target.parentElement;
   li.remove();
}

function paintToDo(newTodo) {
   const li = document.createElement("li");
   const span = document.createElement("span");
   span.innerText = newTodo;
   const button = document.createElement("button");
   button.innerText = "✖︎";
   button.addEventListener("click", deleteToDo);
   li.appendChild(span);
   li.appendChild(button);
   toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
   event.preventDefault();
   const newTodo = toDoInput.value;
   toDoInput.value = "";
   toDos.push(newTodo);
   paintToDo(newTodo);
   saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
   const parsedToDos = JSON.parse(savedToDos);
   toDos = parsedToDos; // localstorage에 toDo값이 들어있으면 parsedToDos를 넣어서 전에 있던 toDo들을 복원
   parsedToDos.forEach(paintToDo);
}
