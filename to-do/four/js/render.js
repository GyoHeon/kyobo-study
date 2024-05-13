import { todoItems } from "./data.js";
import {
  makeDivWithClass,
  makeElementWithClass,
  makeHeader,
  makeListHeader,
} from "./element.js";
import { listRender } from "./list.js";

export function render() {
  const root = document.getElementById("app");

  if (!root) {
    alert("Root element not found");
    return;
  }

  const todo_wrap = makeDivWithClass({
    className: "todolist_wrap",
  });

  const headerWrapper = makeHeader();
  todo_wrap.appendChild(headerWrapper);

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
    placeholder: "Add your task",
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

      const listWrapper = document.querySelector("ul.todolist_list");
      if (listWrapper) {
        listRender(listWrapper);
      }
    }
  });

  todo_inputwrap.appendChild(todo_form);
  todo_wrap.appendChild(todo_inputwrap);

  const todo_list_wrap = makeDivWithClass({
    className: "todolist_list_wrap",
  });
  const listHeader = makeListHeader();
  todo_list_wrap.appendChild(listHeader);

  const todo_list = makeElementWithClass({
    tag: "ul",
    className: "todolist_list",
  });

  todo_list_wrap.appendChild(todo_list);
  todo_wrap.appendChild(todo_list_wrap);
  root.appendChild(todo_wrap);

  const listWrapper = document.querySelector("ul.todolist_list");
  if (listWrapper) {
    listRender(listWrapper);
  }
}
