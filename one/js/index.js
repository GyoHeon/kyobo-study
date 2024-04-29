console.log("hi man");

function render() {
  const root = document.getElementById("app");

  const container = document.createElement("div");
  container.className = "container";

  const appTitle = document.createElement("h1");
  appTitle.className = "appTitle";
  appTitle.innerText = "TO DO List Demo App"

  const appTitleSub = document.createElement("p");
  appTitleSub.className = "appTitleSub"
  appTitleSub.innerText = "Do it now."

  const inputArea = document.createElement("div");
  inputArea.className = "inputArea";
  inputArea.innerHTML =`
	<input type="button" value="Add Task"></input>
  `

  const todoBox = document.createElement("div");
  todoBox.className = "todoBox";

  const todoHead = document.createElement("ul");
  todoHead.className = "todoHeadWrap";
  todoHead.innerHTML = `
	<li>#</li>
	<li>Task Name</li>
	<li>Status</li>
	<li>Edit</li>
	<li>Remove</li>
  `;

  const todoList = document.createElement("div");
  todoList.className = "todoList";
  todoList.innerHTML = `
	<ul>
		<li>1</li>
		<li>할 일 1</li>
		<li class="statusTodo">To do</li>
		<li class="buttonEdit"><button type="button" ><span class="blind">수정하기</span></button></li>
		<li class="buttonRemove"><button type="button"><span class="blind">삭제하기</span></button></li>
	</ul>
	<ul>
		<li>2</li>
		<li>할 일 2</li>
		<li class="statusProgress">In Progress</li>
		<li class="buttonEdit"><button type="button" ><span class="blind">수정하기</span></button></li>
		<li class="buttonRemove"><button type="button"><span class="blind">삭제하기</span></button></li>
	</ul>
	<ul>
		<li>3</li>
		<li>할 일 3</li>
		<li class="statusComplete">Complete</li>
		<li class="buttonEdit"><button type="button" ><span class="blind">수정하기</span></button></li>
		<li class="buttonRemove"><button type="button"><span class="blind">삭제하기</span></button></li>
	</ul>
  `


  root.appendChild(container);
  container.append(appTitle, appTitleSub, inputArea, todoBox);
  todoBox.append(todoHead, todoList);
}

render();
