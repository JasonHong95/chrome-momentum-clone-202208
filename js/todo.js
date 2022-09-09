const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "ToDos";

const toDos = [];

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

/*function sayHello(item) {
   console.log("This is turn of", item);
}*/

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
   const parsedToDos = JSON.parse(savedToDos);
   //    parsedToDos.forEach(sayHello);
   parsedToDos.forEach((item) => console.log("This is turn of", item)); // funtion을 작성할때 더 짧게 쓰는 방법 = arrow function
}
