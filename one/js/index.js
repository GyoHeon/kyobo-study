// container
function makeContainer() {
  const container = document.createElement("div");
  container.className = "container";
  return container;
}

// header_wrap
function makeHeaderWrap() {
  const headerWrap = document.createElement("div");
  headerWrap.className = "header_wrap";
  return headerWrap;
}
function makeHeaderTitle() {
  const headerTitle = document.createElement("h1");
  headerTitle.className = "header_title";
  headerTitle.textContent = "TODO List Demo App";
  return headerTitle;
}
function makeHeaderSubText() {
  const headerSubText = document.createElement("h1");
  headerSubText.className = "header_sub_text";
  headerSubText.textContent = "Do it now.";
  return headerSubText;
}


// contents_wrap
function makeContentsWrap() {
  const contentsWrap = document.createElement("div");
  contentsWrap.className = "contents_wrap";
  return contentsWrap;
}

// input area
function makeInputArea() {
  const inputArea = document.createElement("div");
  inputArea.className = "input_area";
  return inputArea;
}
function makeInputText() {
  const inputText = document.createElement("input");
  inputText.className = "input_text";
  return inputText;
}
function makeSubmitButton() {
  const submitButton = document.createElement("button");
  submitButton.className = "btn_submit";
  submitButton.textContent = "Add Task";
  return submitButton;
}

// todoList area
function makeTodoListArea() {
  const todoListArea = document.createElement("div");
  todoListArea.className = "todo_list_area";
  return todoListArea;
}

function makeTodoListBox() {
  const todoListBox = document.createElement("table");
  todoListBox.className = "todo_list_box";
  return todoListBox;
}

// table Header
function makeTableHeader() {
  const tableHeader = document.createElement("thead");
  const tableHeaderRow = document.createElement("tr");

  const numberHeader = document.createElement("th");
  numberHeader.className = "number";
  numberHeader.textContent = "#";

  const commentHeader = document.createElement("th");
  commentHeader.className = "comment";
  commentHeader.textContent = "TaskName";

  const stateHeader = document.createElement("th");
  stateHeader.className = "state";
  stateHeader.textContent = "Status";

  const editHeader = document.createElement("th");
  editHeader.className = "btn_edit";
  editHeader.textContent = "Edit";

  const removeHeader = document.createElement("th");
  removeHeader.className = "btn_remove";
  removeHeader.textContent = "Remove";

  tableHeaderRow.append(numberHeader, commentHeader, stateHeader, editHeader, removeHeader);
  tableHeader.appendChild(tableHeaderRow);

  return tableHeader;
}

//table Body
function makeTableBody() {
  const tableBody = document.createElement("tbody");
  return tableBody;
}

//todo item
function makeTodoItemRow(item) {

  const todoItemRow = document.createElement("tr");
  todoItemRow.classList.add("input_list_item");

  const numberCell = document.createElement("td");
  numberCell.classList.add("number");
  numberCell.textContent = item.Number;

  const commentCell = document.createElement("td");
  commentCell.classList.add("comment");
  commentCell.textContent = item.TaskName;

  const stateCell = document.createElement("td");
  stateCell.classList.add("state", item.statusClass);

  const stateButton = document.createElement("button");
  stateButton.textContent = item.status;
  stateCell.appendChild(stateButton);

  const editCell = document.createElement("td");
  editCell.classList.add("btn_edit");
  const editButton = document.createElement("button");
  editCell.appendChild(editButton);

  const removeCell = document.createElement("td");
  removeCell.classList.add("btn_remove");
  const removeButton = document.createElement("button");
  removeCell.appendChild(removeButton);

  todoItemRow.append(numberCell, commentCell, stateCell, editCell, removeCell);

  return todoItemRow;
}




// handle
const handleAddTask = () => {
  alert("Task added!");
};
let statusIndex = 0; 


// render()
function render() {
  const root = document.getElementById("app");
  const container  = makeContainer ();
  
  const headerWrap  = makeHeaderWrap ();

  const headerTitle  = makeHeaderTitle ();
  const headerSubText  = makeHeaderSubText ();

  
  const contentsWrap  = makeContentsWrap ();

  const inputArea  = makeInputArea ();
  const inputText  = makeInputText ();
  const submitButton  = makeSubmitButton ();

  submitButton.addEventListener("click", handleAddTask);


  const todoListArea  = makeTodoListArea ();
  const todoListBox = makeTodoListBox();
  const tableHeader = makeTableHeader();
  const tableBody = makeTableBody();

  
 //constant
 const statuses = ['Todo', 'In Progress', 'Complete'];

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

  todoItems.forEach((item) => {
    const row = makeTodoItemRow(item);
    tableBody.append(row);
  });


  root.appendChild(container);
  container.append(headerWrap, contentsWrap);

  headerWrap.append(headerTitle, headerSubText);
  contentsWrap.append(inputArea, todoListArea);
  inputArea.append(inputText, submitButton);
  todoListArea.append(todoListBox);
  todoListBox.append(tableHeader, tableBody);
  

  
}

render();
