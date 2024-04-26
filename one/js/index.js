

function render() {
  const root = document.getElementById("app");


  const Container = document.createElement("div");
  Container.className = "container";
  
  const InputArea = document.createElement("div");
  InputArea.className = "input_area";
  
  InputArea.innerHTML = `
    <input type="text">

  `;

  const TodoListArea = document.createElement("div");
  TodoListArea.className = "todo_area";
  
  TodoListArea.innerHTML = `
    <ul id="InputList">
    </ul> 
  `
  ;

  const InputList = document.getElementById("InputList");

  const InputListItem = document.createElement("li");
  InputListItem.className = "InputListItem";
  
  InputListItem.innerHTML = `
    <span>가나다라마</span> 
  `
  ;

  
  root.appendChild(Container);
  Container.append(InputArea, TodoListArea);
  TodoListArea.append(InputListItem);
  
}

render();
