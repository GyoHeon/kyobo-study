function createElement(tag, className, innerHTML = '') {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = innerHTML;
    return element;
}

function makeContainer() {
	const container = createElement('div', 'container');

	return container;
}

function makeAppTitle() {
	const appTitle = createElement('h1','appTitle',`TO DO List Demo App`);
	return appTitle;
}

function makeAppTitleSub() {
	const appTitleSub = createElement('p', 'appTitleSub', `Do it now.`);

	return appTitleSub;
}

function makeInputWrap() {
	const inputWrap = createElement('form', 'inputWrap');

	return inputWrap;
}

function makeInputTxt() {
	const inputTxt = createElement('input', 'inputTxt');
	inputTxt.type = 'text';
	inputTxt.value = '할 일을 적으세요.';

	return inputTxt;
}

function makeInputButton() {
    const inputButton = createElement('button', 'inputButton');
	inputButton.type = 'submit';
	inputButton.innerHTML = 'Add task';

    return inputButton;
}

function makeTodoBox() {
	const todoBox = createElement('div', 'todoBox');

	return todoBox;
}

function makeTodoHead() {
	const todoHead = createElement('ul', 'todoHeadWrap', `
		<li>#</li>
	 	<li>Task Name</li>
		<li>Status</li>
		<li>Edit</li>
		<li>Remove</li>
	`);

	return todoHead;
}

function makeTodoList() {
	const todoList = createElement('div', 'todoList', `
		<ul>
			<li>1</li>
			<li>할 일 1</li>
			<li class="statusTodo">To do</li>
			<li class="buttonEdit"><button type="button"><span class="blind">수정하기</span></button></li>
			<li class="buttonRemove"><button type="button"><span class="blind">삭제하기</span></button></li>
		</ul>
		<ul>
			<li>2</li>
			<li>할 일 2</li>
			<li class="statusProgress">In Progress</li>
			<li class="buttonEdit"><button type="button"><span class="blind">수정하기</span></button></li>
			<li class="buttonRemove"><button type="button"><span class="blind">삭제하기</span></button></li>
		</ul>
		<ul>
			<li>3</li>
			<li>할 일 3</li>
			<li class="statusComplete">Complete</li>
			<li class="buttonEdit"><button type="button"><span class="blind">수정하기</span></button></li>
			<li class="buttonRemove"><button type="button"><span class="blind">삭제하기</span></button></li>
		</ul>
	`);

	return todoList;
}


function removeTodo() {//삭제 버튼 클릭 시 할 일 삭제
    const removeBtns = document.querySelectorAll('.buttonRemove');
    removeBtns.forEach(button => {
        button.addEventListener('click', () => {
            button.parentNode.remove();
        });
    });
}

function edtiTodoTxt() {//수정 버튼 클릭 시 해당 할 일 내용 직성
    const editBtns = document.querySelectorAll('.buttonEdit');
    editBtns.forEach(button => {
        button.addEventListener('click', () => {
            const todoItem = button.closest('ul');
            const taskName = todoItem.querySelector('li:nth-child(2)');
            const newTaskTxt = prompt('수정할 내용을 입력하세요:', taskName.textContent);
            if (newTaskTxt !== null) {
                taskName.textContent = newTaskTxt;
            }
        });
    });
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

	
	removeTodo();// 삭제 버튼 클릭시 할 일 삭제 기능 등록
	edtiTodoTxt();// Edit 버튼 이벤트 핸들러 등록

	//add Task 클릭 시 추가
	inputButton.addEventListener('click', function(e) {
		e.preventDefault();
		
		const newTodoTxt = inputTxt.value;	
		const newTodo = document.createElement('ul');
		newTodo.innerHTML = `
			<li>${todoList.children.length + 1}</li>
			<li>${newTodoTxt}</li>
			<li class="statusTodo">To do</li>
			<li class="buttonEdit"><button type="button"><span class="blind">수정하기</span></button></li>
			<li class="buttonRemove"><button type="button"><span class="blind">삭제하기</span></button></li>
		`;
	
		todoList.appendChild(newTodo);
		removeTodo();// 삭제 버튼 클릭시 할 일 삭제 기능 등록
		edtiTodoTxt();// Edit 버튼 이벤트 핸들러 등록

	});
	
}


render();
