
function render() {
  const root = document.getElementById("app");

  const header = generateHeader();
  const footer = generateFooter();
  const inputForm = generateInputForm();
  const todoList = generateTodoList();

  root.appendChild(header);
  root.appendChild(inputForm);
  root.appendChild(todoList);
  root.appendChild(footer);
}

function generateHeader() {
  const header = document.createElement("header");
  header.innerHTML = "<h1>Todo List</h1>";
  return header;
}

function generateFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = "<p>&copy; minseokchoi js-playgroud</p>";
  return footer;
}

function generateInputForm() {
  const inputForm = document.createElement("form");
  inputForm.innerHTML = `
        <input type="text" id="todoInput" placeholder="Add new todo">
        <button type="submit">Add</button>
    `;

  return inputForm;
}

function generateTodoList() {
  const todoList = document.createElement("div");
  todoList.className = "todoList";

  todoList.innerHTML = `
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
  </ul>
  `;

  return todoList;
}

render();
