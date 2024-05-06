function makeContainer() {
	const container = document.createElement("div");
	container.className = "container";

	return container;
}

function makeAppTitle() {
	const appTitle = document.createElement("h1");
	appTitle.className = "appTitle";
	appTitle.innerText = "TO DO List Demo App";

	return appTitle;
}

function makeAppTitleSub() {
	const appTitleSub = document.createElement("p");
	appTitleSub.className = "appTitleSub"
	appTitleSub.innerText = "Do it now."

	return appTitleSub;
}

function makeInputWrap() {
	const inputWrap = document.createElement("div");
	inputWrap.className = "inputWrap";

	return inputWrap;
}

function makeInputTxt() {
	const inputTxt = document.createElement("div");
	inputTxt.className = "inputTxt";
	inputTxt.innerHTML = `
		<input type="text" value="할 일을 적으세요."></input>
	`

	return inputTxt;
}

function makeInputButton() {
    const inputButton = document.createElement("div");
    inputButton.className = "inputButton";
    inputButton.innerHTML = `
        <input type="button" value="Add Task"></input>
    `;
  
    return inputButton;
}

function makeTodoBox() {
	const todoBox = document.createElement("div");
	todoBox.className = "todoBox";

	return todoBox;
}

function makeTodoHead() {
	const todoHead = document.createElement("ul");
	todoHead.className = "todoHeadWrap";
	todoHead.innerHTML = `
	  <li>#</li>
	  <li>Task Name</li>
	  <li>Status</li>
	  <li>Edit</li>
	  <li>Remove</li>
	`;

	return todoHead;
}

function makeTodoList() {
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

	return todoList;
}

function render() {
 	const root = document.getElementById("app");
	const container = makeContainer();
	const appTitle = makeAppTitle();
	const appTitleSub = makeAppTitleSub();
	const inputButton = makeInputButton();
	const inputWrap = makeInputWrap();
	const inputTxt = makeInputTxt();
	const todoBox = makeTodoBox();
	const todoHead = makeTodoHead();
	const todoList = makeTodoList();

	root.appendChild(container);
	container.append(appTitle, appTitleSub, inputWrap, todoBox);
	inputWrap.append(inputTxt, inputButton);
	todoBox.append(todoHead, todoList);

	inputButton.addEventListener('click', function() {
        alert(inputTxt.querySelector('input').value);
    });
}

render();
