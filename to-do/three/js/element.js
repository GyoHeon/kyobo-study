import {todoItems} from "./data.js";
import {listRender} from "./index.js";

export function makeElementWithClass({ tag, ...options }) {
  const element = document.createElement(tag);

  Object.entries(options).forEach(([key, value]) => {
    element[key] = value;
  });

  return element;
}

export function makeDivWithClass({ ...options }) {
  return makeElementWithClass({
    tag: "div",
    ...options,
  });
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

  const filterAll =  makeElementWithClass({
    tag: "button",
    className: "todolist_filter",
    textContent: "All"
  });

  filterAll.addEventListener("click", () => {
    const listWrapper = document.querySelector("ul.todolist_list");
    if (listWrapper) {
      listRender(listWrapper);
    }
  });

  const filterTodo =  makeElementWithClass({
    tag: "button",
    className: "todolist_filter",
    textContent: "Todo"
  });

  filterTodo.addEventListener("click", () => {
    const listWrapper = document.querySelector("ul.todolist_list");
    if (listWrapper) {
      listRender(listWrapper, filterTodo.textContent);
    }
  });

  const filterInProgess =  makeElementWithClass({
    tag: "button",
    className: "todolist_filter",
    textContent: "InProgress"
  });

  filterInProgess.addEventListener("click", () => {
    const listWrapper = document.querySelector("ul.todolist_list");
    if (listWrapper) {
      listRender(listWrapper, filterInProgess.textContent);
    }
  });

  const filterComplete =  makeElementWithClass({
    tag: "button",
    className: "todolist_filter",
    textContent: "Complete"
  });

  filterComplete.addEventListener("click", () => {
    const listWrapper = document.querySelector("ul.todolist_list");
    if (listWrapper) {
      listRender(listWrapper, filterComplete.textContent);
    }
  });

  headerWrapper.appendChild(header);
  headerWrapper.appendChild(subHeader);
  headerWrapper.appendChild(filterAll);
  headerWrapper.appendChild(filterTodo);
  headerWrapper.appendChild(filterInProgess);
  headerWrapper.appendChild(filterComplete);

  return headerWrapper;
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
    textContent: index + 1,
  });

  const todolist_name = makeDivWithClass({
    tag: "input",
    className: "todolist_name",
    value: item.TaskName,
    disabled: true
  });

  const todolist_status = makeDivWithClass({
    className: "todolist_status",
  });

  const todolist_statusbadge = makeDivWithClass({
    className: "todolist_statusbadge " + item.statusClass,
    textContent: item.status,
  });

  const todolist_edit = makeDivWithClass({
    className: "todolist_edit",
  });

  const todolist_editbtn = makeElementWithClass({
    tag: "button",
    className: "todolist_editbtn",
    textContent: "Edit"
  });

  todolist_editbtn.addEventListener("click", () => {
    todolist_name.disabled = !todolist_name.disabled

    if (todolist_name.disabled) {
      todoItems[index].TaskName = todolist_name.value;
    }
  });

  const todolist_remove = makeDivWithClass({
    className: "todolist_remove",
  });

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

  todolist_item.appendChild(todolist_number);
  todolist_item.appendChild(todolist_name);

  todolist_item.appendChild(todolist_status);
  todolist_status.appendChild(todolist_statusbadge);

  todolist_item.appendChild(todolist_edit);
  todolist_edit.appendChild(todolist_editbtn);

  todolist_item.appendChild(todolist_remove);
  todolist_remove.appendChild(todolist_removebtn);

  return todolist_item;
}
