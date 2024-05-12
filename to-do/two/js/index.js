import { todoItems } from "./data.js";
import { makeDivWithClass, makeElementWithClass, makeListHeader, makeTodoItem } from "./element.js";

function listRender() {
  const listWrapper = document.querySelector(".todolist_list");

  listWrapper.innerHTML = "";

  todoItems.map((item) => {
    return makeTodoItem(item, listWrapper);
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

  todo_inputwrap.appendChild(todo_form);
  todo_wrap.appendChild(todo_inputwrap);

  const todo_list_wrap = makeDivWithClass({
    className: "todolist_list_wrap",
  });
  const listHeader = makeListHeader()
  todo_list_wrap.appendChild(listHeader);

  const todo_list = makeElementWithClass({
    tag: "ul",
    className: "todolist_list",
  });

  todo_list_wrap.appendChild(todo_list);
  todo_wrap.appendChild(todo_list_wrap);
  root.appendChild(todo_wrap);

  listRender();
}

render();
