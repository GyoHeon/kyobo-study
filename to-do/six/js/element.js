import { status, statusClassObj, todoItems } from "./data.js";
import { listRender } from "./list.js";

export function makeElementWithClass({ tag, ...options }) {
  const element = document.createElement(tag);

  Object.entries(options).forEach(([key, value]) => {
    element[key] = value;
  });

  return element;
}

export function makeDivWithClass({ ...options }) {
  const div = makeElementWithClass({
    tag: "div",
    ...options,
  });

  return div;
}

export function makeHeader() {
  const headerWrapper = makeDivWithClass({
    className: "todolist_headerwrap",
  });
  const header = makeElementWithClass({
    tag: "h1",
    className: "todolist_header",
    textContent: "TODO List Demo App",
  });
  const subHeader = makeElementWithClass({
    tag: "span",
    className: "todolist_subheader",
    textContent: "Do it now.",
  });

  headerWrapper.appendChild(header);
  headerWrapper.appendChild(subHeader);

  return headerWrapper;
}

export function makeForm() {
  const todoForm = makeElementWithClass({
    tag: "form",
    className: "todolist_form",
  });

  const todoInput = makeElementWithClass({
    tag: "input",
    className: "todolist_input",
    placeholder: "Add your task",
  });
  const formBtn = makeElementWithClass({
    tag: "button",
    className: "todolist_inputbtn",
    textContent: "Add Task",
  });

  todoForm.appendChild(todoInput);
  todoForm.appendChild(formBtn);

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = todoInput.value;
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

  return todoForm;
}

export function makeListHeader() {
  const listHeader = makeElementWithClass({
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

  listHeader.appendChild(todolist_number);
  listHeader.appendChild(todolist_name);
  listHeader.appendChild(todolist_status);
  listHeader.appendChild(todolist_edit);
  listHeader.appendChild(todolist_remove);

  return listHeader;
}

export function makeTodoItem(item, index) {
  const todolist_item = makeElementWithClass({
    tag: "li",
    className: "todolist_item",
  });

  const todolist_number = makeDivWithClass({
    className: "todolist_number",
    textContent: item.Number,
  });
  todolist_item.appendChild(todolist_number);

  const todoName = makeElementWithClass({
    tag: "input",
    className: "todolist_name",
    value: item.TaskName,
    disabled: true,
  });
  todolist_item.appendChild(todoName);

  const todolist_status = makeDivWithClass({
    className: "todolist_status",
  });
  todolist_item.appendChild(todolist_status);

  const statusStr = status[item.status];
  const todoBadge = makeDivWithClass({
    className: "todolist_statusbadge " + statusClassObj[statusStr],
    textContent: statusStr,
  });
  todoBadge.addEventListener("click", () => {
    const statusIndex = (item.status + 1) % 3;
    item.status = statusIndex;
    todoBadge.textContent = status[statusIndex];
    todoBadge.className =
      "todolist_statusbadge " + statusClassObj[status[statusIndex]];
  });
  todolist_status.appendChild(todoBadge);

  const todoEdit = makeDivWithClass({
    className: "todolist_edit",
  });
  todolist_item.appendChild(todoEdit);

  const todoEditBtn = makeElementWithClass({
    tag: "button",
    className: "todolist_editbtn",
    textContent: "Edit",
  });
  todoEdit.appendChild(todoEditBtn);

  todoEditBtn.addEventListener("click", () => {
    const isDiabled = todoName.disabled;
    todoName.disabled = !todoName.disabled;
    if (isDiabled) {
      todoName.focus();
    }
    if (!isDiabled) {
      todoItems[index].TaskName = todoName.value;
    }
  });

  const todolist_remove = makeDivWithClass({
    className: "todolist_remove",
  });
  todolist_item.appendChild(todolist_remove);

  const todolist_removebtn = makeElementWithClass({
    tag: "button",
    className: "todolist_removebtn",
    textContent: "Remove",
  });
  todolist_remove.addEventListener("click", () => {
    todoItems.splice(index, 1);

    const listWrapper = document.querySelector("ul.todolist_list");
    if (listWrapper) {
      listRender(listWrapper);
    }
  });
  todolist_remove.appendChild(todolist_removebtn);

  return todolist_item;
}
