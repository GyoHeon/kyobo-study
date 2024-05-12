function makeElementWithClass({ tag, ...options }) {
  const element = document.createElement(tag);

  Object.entries(options).forEach(([key, value]) => {
    element[key] = value;
  });

  return element;
}

function makeDivWithClass({ ...options }) {
  const div = makeElementWithClass({
    tag: "div",
    ...options,
  });

  return div;
}

function makeTodoItem(item, todolist_list) {
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

const todoItems = [
  {
    Number: "24",
    TaskName: "Buy Grocey",
    status: "Todo",
    statusClass: "todo",
  },
  {
    Number: "25",
    TaskName: "Send Email",
    status: "In Progress",
    statusClass: "inProgress",
  },
  {
    Number: "28",
    TaskName: "Finish Assignment",
    status: "Complete",
    statusClass: "complete",
  },
  {
    Number: "30",
    TaskName: "Bake Cake",
    status: "Todo",
    statusClass: "todo",
  },
  {
    Number: "31",
    TaskName: "Write Blog post",
    status: "In Progress",
    statusClass: "inProgressActive",
  },
];

function render() {
  const root = document.getElementById("app");

  const todolist_wrap = makeDivWithClass({
    className: "todolist_wrap",
  });
  const todolist_headerwrap = makeDivWithClass({
    className: "todolist_headerwrap",
  });
  const todolist_header = makeElementWithClass({
    tag: "h1",
    className: "todolist_header",
    textContent: "TODO List Demo App",
  });
  const todolist_subheader = makeElementWithClass({
    tag: "span",
    className: "todolist_subheader",
    textContent: "Do it now.",
  });

  const todolist_inputwrap = makeDivWithClass({
    className: "todolist_inputwrap",
  });

  const todolist_form = makeElementWithClass({
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
  todolist_form.appendChild(todolist_input);
  todolist_form.appendChild(todolist_inputbtn);

  todolist_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = todolist_input.value;
    if (task) {
      todoItems.push({
        Number: "31",
        TaskName: "Write Blog post",
        status: "In Progress",
        statusClass: "inProgressActive",
      });

      render();
    }
  });

  const todolist_list = makeElementWithClass({
    tag: "ul",
    className: "todolist_list",
  });

  const todolist_itemheader = makeElementWithClass({
    tag: "li",
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

  todolist_itemheader.appendChild(todolist_number);
  todolist_itemheader.appendChild(todolist_name);

  todolist_itemheader.appendChild(todolist_status);

  todolist_itemheader.appendChild(todolist_edit);

  todolist_itemheader.appendChild(todolist_remove);

  todolist_list.appendChild(todolist_itemheader);

  todoItems.forEach((item) => {
    makeTodoItem(item, todolist_list);
  });

  todolist_wrap.appendChild(todolist_headerwrap);
  todolist_headerwrap.appendChild(todolist_header);
  todolist_headerwrap.appendChild(todolist_subheader);

  todolist_wrap.appendChild(todolist_inputwrap);
  todolist_inputwrap.appendChild(todolist_form);

  todolist_wrap.appendChild(todolist_list);

  root.innerHTML = "";
  root.appendChild(todolist_wrap);
}

render();
