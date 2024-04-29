

function render() {
  const root = document.getElementById("app");


  const Container = document.createElement("div");
  Container.className = "container";
  
  const InputArea = document.createElement("div");
  InputArea.className = "input_area";
  
  InputArea.innerHTML = `
    <input type="text">
    <button>Add Task</button>
  `;

  const TodoListArea = document.createElement("div");
  TodoListArea.className = "todo_area";
  
  TodoListArea.innerHTML = `
    <table>
      <thead>
        <tr>
          <th class="number">#</th>
          <th class="comment">TaskName</th>
          <th class="state">Status</th>
          <th class="btn_edit">Edit</th>
          <th class="btn_remove">Remove</th>
        </tr>
      </thead>
      <tbody Id="InputList">
        <tr class="InputListItem">
          <td class="number">24</td> 
          <td class="comment">Buy Grocery</td> 
          <td class="state todo">
            <div>Todo</div>
          </td> 
          <td class="btn_edit">
            <button><img src="./assets/img_edit.png" alt="edit"></button>
          </td> 
          <td class="btn_remove">
            <button><img src="./assets/img_delete.png" alt="delete"></button>
          </td> 
        </tr>
        <tr class="InputListItem">
          <td class="number">25</td> 
          <td class="comment">Send Email</td> 
          <td class="state inProgress">
            <div>In Progress</div>
          </td> 
          <td class="btn_edit">
            <button><img src="./assets/img_edit.png" alt="edit"></button>
          </td> 
          <td class="btn_remove">
            <button><img src="./assets/img_delete.png" alt="delete"></button>
          </td> 
        </tr>
        <tr class="InputListItem">
          <td class="number">28</td> 
          <td class="comment">Finish Assignment</td> 
          <td class="state complete">
            <div>Complete</div>
          </td> 
          <td class="btn_edit">
            <button><img src="./assets/img_edit.png" alt="edit"></button>
          </td> 
          <td class="btn_remove">
            <button><img src="./assets/img_delete.png" alt="delete"></button>
          </td> 
        </tr>
        <tr class="InputListItem">
          <td class="number">30</td> 
          <td class="comment">Bake Cake</td> 
          <td class="state todo">
            <div>Todo</div>
          </td> 
          <td class="btn_edit">
            <button><img src="./assets/img_edit.png" alt="edit"></button>
          </td> 
          <td class="btn_remove">
            <button><img src="./assets/img_delete.png" alt="delete"></button>
          </td> 
        </tr>
        <tr class="InputListItem">
          <td class="number">31</td> 
          <td class="comment">Write Blog post</td> 
          <td class="state inProgressActive">
            <div>In Progress</div>
          </td> 
          <td class="btn_edit">
            <button><img src="./assets/img_edit.png" alt="edit"></button>
          </td> 
          <td class="btn_remove">
            <button><img src="./assets/img_delete.png" alt="delete"></button>
          </td> 
        </tr>
  
      </tbody>
    </table>
  `
  ;

  
  root.appendChild(Container);
  Container.append(InputArea, TodoListArea);
  
}

render();
