import { statusStr, statusClassObj } from "./data.js";

// 태그 생성 함수 
export function createElementWithClass({ tag, ...options }) {
    const element = document.createElement(tag);

    Object.entries(options).forEach(([key, value]) => {
        element[key] = value;
});

return element;
}

export function createDivWithClass({ ...options }) {
    const div = createElementWithClass({
        tag: "div",
        ...options,
    });

return div;
}




// table Header
export function makeTableHeader() {
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
export function makeTodoItemRow(item, index, status, todoItems, setTodoItems, createTodoItems) {

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
    });
    const commentText =  createElementWithClass({
        tag: "input",
        className:"comment_text",
        value : item.TaskName,
        disabled: true,
    });


    const stateCell = createElementWithClass({
        tag: "td",
        className : "status",
    });
    
    const stateButton = createElementWithClass({
        tag: "button",
        textContent : statusStr[item.statusStr],
        className : `state ${statusClassObj[statusStr[item.statusStr]]}`,
    });

    stateButton.addEventListener("click", () => {
        const statusIndex = (item.statusStr + 1) % 3;
        item.statusStr = statusIndex;
        stateButton.textContent = statusStr[statusIndex];
        stateButton.className =
        "state " + statusClassObj[statusStr[statusIndex]];
        setTodoItems([...todoItems]);
    });

    const editCell = createElementWithClass({
        tag: "td",
        className : "btn_edit",
    });

    const editButton =  createElementWithClass({
        tag: "button",
    });
    editButton.addEventListener("click", () => {
        const isDiabled = commentText.disabled;
        commentText.disabled = !commentText.disabled;
       
        if (isDiabled) {
        commentText.focus();
        editButton.classList.add("complete");
        }
        if (!isDiabled) {
        todoItems[index].TaskName = commentText.value;
        editButton.classList.remove("complete");
        setTodoItems([...todoItems]);
        }
    });
    commentText.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          commentText.disabled = true;
          todoItems[index].TaskName = commentText.value;
          editButton.classList.remove("complete");
          setTodoItems([...todoItems]);
        }
      });

    const removeCell = createElementWithClass({
        tag: "td",
        className : "btn_remove",
    });

    const removeButton = createElementWithClass({
        tag: "button",
    });
    removeButton.addEventListener("click", () => {
        setTodoItems(todoItems.filter((_, i) => i !== index));
        createTodoItems();
      });

commentCell.appendChild(commentText);
stateCell.appendChild(stateButton);
editCell.appendChild(editButton);
removeCell.appendChild(removeButton);
todoItemRow.append(numberCell, commentCell, stateCell, editCell, removeCell);

return todoItemRow;
}

