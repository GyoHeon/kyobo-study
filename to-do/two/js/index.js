import { todoItems } from "./data.js";
import { makeDivWithClass, makeElementWithClass, makeTodoItem } from "./element.js";

function listRender() {
  const todolist_list = document.querySelector(".todolist_list");

  todolist_list.innerHTML = "";

  todoItems.map((item) => {
    return makeTodoItem(item, todolist_list);
  })
}

function render() {
  const root = document.getElementById("app");

  const todo_wrap = makeDivWithClass({
    className: "todolist_wrap",
  });
  const todo_headerwrap = makeDivWithClass({
    className: "todolist_headerwrap",
  });
  const todo_header = makeElementWithClass({
    tag: "h1",
    className: "todolist_header",
    textContent: "TODO List Demo App",
  });
  const todo_subheader = makeElementWithClass({
    tag: "span",
    className: "todolist_subheader",
    textContent: "Do it now.",
  });

  todo_headerwrap.appendChild(todo_header);
  todo_headerwrap.appendChild(todo_subheader);
  todo_wrap.appendChild(todo_headerwrap);

  const todo_inputwrap = makeDivWithClass({
    className: "todolist_inputwrap",
  });

  const todo_form = makeElementWithClass({
    tag: "form",
    className: "todolist_form",
  });

  const todolist_input = makeElementWithClass({
    tag: "input",
    className: "todolist_input",
    placeholder: "Add your tas",
  });
  const todolist_inputbtn = makeElementWithClass({
    tag: "button",
    className: "todolist_inputbtn",
    textContent: "Add Task",
  });

  todo_form.appendChild(todolist_input);
  todo_form.appendChild(todolist_inputbtn);

  todo_inputwrap.appendChild(todo_form);
  todo_wrap.appendChild(todo_inputwrap);

  todo_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = todolist_input.value;
    if (task) {
      todoItems.push({
        Number: "31",
        TaskName: task,
        status: "In Progress",
        statusClass: "inProgressActive",
      });

      listRender();
    }
  });

  const todo_list_wrap = makeDivWithClass({
    className: "todolist_list_wrap",
  });

  const todo_list = makeElementWithClass({
    tag: "ul",
    className: "todolist_list",
  });

  const todo_itemheader = makeElementWithClass({
    tag: "header",
    className: "todolist_item todolist_itemheader",
  });

  const todolist_number = makeDivWithClass({
    className: "todolist_number",
    textContent: "Number",
  });

  const todolist_name = makeDivWithClass({
    className: "todolist_name",
    textContent: "TaskName",
  });

  const todolist_status = makeDivWithClass({
    className: "todolist_status",
    textContent: "Status",
  });

  const todolist_edit = makeDivWithClass({
    className: "todolist_edit",
    textContent: "Edit",
  });

  const todolist_remove = makeDivWithClass({
    className: "todolist_remove",
    textContent: "Remove",
  });

  todo_itemheader.appendChild(todolist_number);
  todo_itemheader.appendChild(todolist_name);
  todo_itemheader.appendChild(todolist_status);
  todo_itemheader.appendChild(todolist_edit);
  todo_itemheader.appendChild(todolist_remove);
  todo_list_wrap.appendChild(todo_itemheader);
  todo_list_wrap.appendChild(todo_list);

  todoItems.forEach((item) => {
    makeTodoItem(item, todo_list);
  });

  todo_wrap.appendChild(todo_list_wrap);

  root.appendChild(todo_wrap);
}

render();
