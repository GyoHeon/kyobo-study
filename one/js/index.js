let todos = [];
const ADD_MESSAGE = "Add new todo";

function render() {
  const root = document.getElementById("app");

  const header = generateHeader();
  const inputForm = generateInputForm();
  const addButton = generateAddButton();
  const todoList = generateTodo();


  root.appendChild(header);
  root.appendChild(inputForm);
  root.appendChild(addButton);
  root.appendChild(todoList);

  document.getElementById("addButton").addEventListener("click", addTodo);

}

function generateHeader() {
  const header = document.createElement("h1");
  header.textContent = "Todo List";
  return header;
}

function generateInputForm() {
  const inputForm = document.createElement("input");
  inputForm.id = "todoInput"
  inputForm.value = ADD_MESSAGE;

  return inputForm;
}

function generateAddButton() {
  const addTodoButton = document.createElement("button");
  addTodoButton.id = "addButton"
  addTodoButton.textContent = "add";
  return addTodoButton;
}


function generateTodo() {
  const todoList = document.createElement("ul");
  todoList.id = "todoList"

  todos.forEach( function(todo) {
    const li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  });

  return todoList;
}


function renderTodo(todo) {
  const todoList = document.getElementById("todoList");

  let li = document.createElement("li");
  li.className = "task";
  li.textContent = todo;
  todoList.appendChild(li);
}
function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const input = todoInput.value.trim();

  if (input === "") {
    alert("할일을 입력해주세요.");
    return;
  }

  todos.push(input);
  renderTodo(input);
  todoInput.value = ADD_MESSAGE;
  alert("할일이 추가 되었습니다!");
}

render();




