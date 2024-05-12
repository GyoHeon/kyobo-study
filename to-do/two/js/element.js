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

export function makeTodoItem(item, todolist_list) {
  const todolist_item = makeElementWithClass({
    tag: "li",
    className: "todolist_item",
  });
  const todolist_number = makeDivWithClass({
    className: "todolist_number",
    textContent: item.Number,
  });
  const todolist_name = makeDivWithClass({
    className: "todolist_name",
    textContent: item.TaskName,
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
    textContent: "Edit",
  });

  todolist_editbtn.addEventListener("click", () => {
    alert("Edit Clicked");
  });

  const todolist_remove = makeDivWithClass({
    className: "todolist_remove",
  });
  const todolist_removebtn = makeElementWithClass({
    tag: "button",
    className: "todolist_removebtn",
    textContent: "Remove",
  });

  todolist_item.appendChild(todolist_number);
  todolist_item.appendChild(todolist_name);

  todolist_item.appendChild(todolist_status);
  todolist_status.appendChild(todolist_statusbadge);

  todolist_item.appendChild(todolist_edit);
  todolist_edit.appendChild(todolist_editbtn);

  todolist_item.appendChild(todolist_remove);
  todolist_remove.appendChild(todolist_removebtn);

  todolist_list.appendChild(todolist_item);
}