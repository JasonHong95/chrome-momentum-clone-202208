const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
   const li = document.createElement("li");
   const span = document.createElement("span");
   li.appendChild(span);
   span.innerText = newTodo;
   toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
   event.preventDefault();
   const newTodo = toDoInput.value; // Input의 현재 Value를 새로운변수(newTodo)에 복사
   toDoInput.value = ""; // 이 다음부터 무슨 짓을 하던 newTodo와 상관없음
   paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
