import { statusStr, statusClassObj } from "./data.js";
import {
  createElementWithClass,
  createDivWithClass,
  makeTableHeader,
  makeTodoItemRow
} from "./element.js";


 //render
function render() {
  const root = document.getElementById("app");
  
  if(!root) {
    alert("Root element not found");
    return;
  }
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

  const filterArea  = createDivWithClass({
    className :  "filter_area"
  });
  const TagAll  = createElementWithClass({
    tag : "button",
    className : "filter_tag",
    textContent : "All",
  });
  const TagTodo  = createElementWithClass({
    tag : "button",
    className : "filter_tag",
    textContent : "Todo",
  });
  const TagInProgress  = createElementWithClass({
    tag : "button",
    className : "filter_tag",
    textContent : "InProgress",
  });
  const TagComplete  = createElementWithClass({
    tag : "button",
    className : "filter_tag",
    textContent : "Complete",
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
  contentsWrap.append(inputArea, filterArea, todoListArea);
  filterArea.append(TagAll, TagTodo, TagInProgress, TagComplete);
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
    if (task.trim() === '') return;
    const newTodoItem = getAllTodoItems(). concat({
        Number : newNumber++,
        TaskName : task,
        statusStr: 0
      })
      setTodoItems(newTodoItem)
      createTodoItems();
      inputText.value = '';
  }
  
  const createTodoItems = () => {
    tableBody.innerHTML = ''; 

    const allTodoItems = getAllTodoItems() 
    allTodoItems.forEach((item, index) => {
      const row = makeTodoItemRow(item, index, statusStr, todoItems, setTodoItems, createTodoItems);
      tableBody.append(row);
    });
  }

  const filterTodoItems = (status) => {
    tableBody.innerHTML = ''; 
    const filteredTodoItems = getAllTodoItems().filter(item => item.statusStr === status);
  
    filteredTodoItems.forEach((item, index) => {
      const row = makeTodoItemRow(item, index, statusStr, todoItems, setTodoItems, createTodoItems);
      tableBody.append(row);
    });
  };
  const showAllTodoItems = () => {
    createTodoItems();
  };


  inputArea.addEventListener("submit", (e) => {
    e.preventDefault();
    appendTodoItem();
  });
  
  TagTodo.addEventListener("click", () => {
    filterTodoItems(0); 
  });
  
  TagInProgress.addEventListener("click", () => {
    filterTodoItems(1); 
  });
  
  TagComplete.addEventListener("click", () => {
    filterTodoItems(2); 
  });


  TagAll.addEventListener("click", () => {
    showAllTodoItems();
  });




}

render();
