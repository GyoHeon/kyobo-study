
import { statusClassArr } from "./data.js";

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
export function makeTodoItemRow(item, index, statusClassArr, todoItems, setTodoItems, createTodoItems) {

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
        tag: "span",
        className:"comment_text",
        textContent : item.TaskName
    });


    const stateCell = createElementWithClass({
        tag: "td",
        className : `state ${statusClassArr[0].classNameTag}`,
    });

    const stateButton = createElementWithClass({
        tag: "button",
        textContent : `${statusClassArr[0].classText}`,
    });

    let currentIndex = 0;
    stateButton.addEventListener("click", () => {
        
        currentIndex = currentIndex < 3 ? currentIndex + 1 : 0;
        
        stateCell.className = `state ${statusClassArr[currentIndex].classNameTag}`;
        stateButton.textContent = `${statusClassArr[currentIndex].classText}`;
    });

    const editCell = createElementWithClass({
        tag: "td",
        className : "btn_edit",
    });

    const editButton =  createElementWithClass({
        tag: "button",
    });
    editButton.addEventListener("click", () => {
        handleEdit();
    });

    const handleEdit = () => {
        const isSpan = commentCell.querySelector("span");
        if (isSpan) {
            const input = document.createElement("input");
            input.value = commentText.textContent;
            input.classList.add("comment_text");
            input.maxLength = "100";
            input.placeholder = "할일을 입력하세요";

            commentCell.removeChild(commentText);
            commentCell.appendChild(input);
            input.focus();

            input.addEventListener("blur", () => {
                commentText.textContent = input.value;
                commentCell.removeChild(input);
                commentCell.appendChild(commentText);
            });
        }
    }

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

