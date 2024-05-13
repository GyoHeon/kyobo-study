import { todoItems } from "./data.js";
import { makeTodoItem } from "./element.js";

export function listRender(listWrapper) {
  listWrapper.innerHTML = "";

  todoItems.map((item, index) => {
    const listItem = makeTodoItem(item, index);

    listWrapper.appendChild(listItem);
  });
}
