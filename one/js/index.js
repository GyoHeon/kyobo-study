// 태그 생성 함수 
function createElementWithClass({ tag, ...options }) {
  const element = document.createElement(tag);

  Object.entries(options).forEach(([key, value]) => {
    element[key] = value;
  });

  return element;
}

function createDivWithClass({ ...options }) {
  const div = createElementWithClass({
    tag: "div",
    ...options,
  });

  return div;
}


 //constant
 const statuseClassArr = [
  {
    classNameTag: "todo",
    classText: "Todo"
    
  },
  {
    classNameTag: "inProgress",
    classText: "In Progress"
  },
  {
    classNameTag: "inProgressActive",
    classText: "In Progress"
  },
  {
    classNameTag: "complete",
    classText: "Complete"
  }
];

// table Header
function makeTableHeader() {
  const tableHeader = createElementWithClass({
    tag: "thead",
  });
  const tableHeaderRow = createElementWithClass({
    tag: "tr",
  });

  const numberHeader = createElementWithClass({
    tag: "th",
    className : "number",
    textContent : "#"
  });
  
  const commentHeader = createElementWithClass({
    tag: "th",
    className : "comment",
    textContent : "TaskName"
  });

  const stateHeader = createElementWithClass({
    tag: "th",
    className : "state",
    textContent : "Status"
  });
  
  const editHeader = createElementWithClass({
    tag: "th",
    className : "btn_edit",
    textContent : "Edit"
  });
  
  const removeHeader = createElementWithClass({
    tag: "th",
    className : "btn_remove",
    textContent : "Remove"
  });
  tableHeaderRow.append(numberHeader, commentHeader, stateHeader, editHeader, removeHeader);
  tableHeader.appendChild(tableHeaderRow);

  return tableHeader;
}


//todo item
function makeTodoItemRow(item) {

  const todoItemRow = document.createElement("tr");
  todoItemRow.classList.add("input_list_item");

  const numberCell = createElementWithClass({
    tag: "td",
    className : "number",
    textContent : item.Number
  });

  const commentCell  = createElementWithClass({
    tag: "td",
    className : "comment",
    textContent : item.TaskName
  });

  const stateCell = createElementWithClass({
    tag: "td",
    className : `state ${statuseClassArr[0].classNameTag}`,
  });

  const stateButton = createElementWithClass({
    tag: "button",
    textContent : `${statuseClassArr[0].classText}`,
  });

  let currentIndex = 0;
  stateButton.addEventListener("click", () => {
    
    currentIndex = currentIndex < 3 ? currentIndex + 1 : 0;
   
    stateCell.className = `state ${statuseClassArr[currentIndex].classNameTag}`;
    stateButton.textContent = `${statuseClassArr[currentIndex].classText}`;
  });

  const editCell = createElementWithClass({
    tag: "td",
    className : "btn_edit",
  });

  const editButton =  createElementWithClass({
    tag: "button",
  });
  
  const removeCell = createElementWithClass({
    tag: "td",
    className : "btn_remove",
  });

  const removeButton = createElementWithClass({
    tag: "button",
  });

  stateCell.appendChild(stateButton);
  editCell.appendChild(editButton);
  removeCell.appendChild(removeButton);
  todoItemRow.append(numberCell, commentCell, stateCell, editCell, removeCell);

  return todoItemRow;
}




 //render
function render() {
  const root = document.getElementById("app");
  
  const container = createDivWithClass({
    className : "container"
  });

  const headerWrap = createDivWithClass({
    className :  "header_wrap"
  });

  const  headerTitle = createElementWithClass({
    tag : "h1",
    className : "header_title",
    textContent : "TODO List Demo App"
  });
  const headerSubText = createElementWithClass({
    tag : "span",
    className : "header_sub_text",
    textContent : "Do it now."
  });

  const contentsWrap  = createDivWithClass({
    className :  "contents_wrap"
  });

  const inputArea = createElementWithClass({
    tag: "form",
    className :  "input_area"
  });
  const inputText = createElementWithClass({
    tag : "input",
    className : "input_text",
    placeholder : "오목이 밥주기"
  });
  const submitButton  = createElementWithClass({
    tag : "button",
    className : "btn_submit",
    textContent : "Add Task"
  });

  const todoListArea  = createDivWithClass({
    className :  "todo_list_area"
  });
  const todoListBox = createElementWithClass({
    tag : "table",
    className : "todo_list_box",
  });

  const tableHeader = makeTableHeader();
  const tableBody  = createElementWithClass({
    tag: "tbody",
  });

  root.appendChild(container);
  container.append(headerWrap, contentsWrap);

  headerWrap.append(headerTitle, headerSubText);
  contentsWrap.append(inputArea, todoListArea);
  inputArea.append(inputText, submitButton);
  todoListArea.append(todoListBox);
  todoListBox.append(tableHeader, tableBody);



  let todoItems = [];
  let newNumber = 1 ; 
  

  const setTodoItems = (newTodoItems) => {
    todoItems = newTodoItems;
  }
  const getAllTodoItems = () => {
    return todoItems;
  }

  const appendTodoItem = () => {
    const task = inputText.value;
    const newTodoItem = getAllTodoItems(). concat({
        Number : newNumber++,
        TaskName : task,
        status: statuseClassArr[0].classText,
        statusClass : statuseClassArr[0].classNameTag
      })
      setTodoItems(newTodoItem)
      createTodoItems();
  }
  
  const createTodoItems = () => {
    tableBody.innerHTML = ''; 

    const allTodoItems = getAllTodoItems() 
    allTodoItems.forEach((item) => {
      const row = makeTodoItemRow(item);
      tableBody.append(row);
      
    });
  }

  inputArea.addEventListener("submit", (e) => {
    e.preventDefault();
    appendTodoItem();
  });

}

render();
