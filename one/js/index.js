console.log("hi man");

function render() {
  const root = document.getElementById("app");

  const div = document.createElement("div");
  div.className = "container";

  div.innerHTML = `
  <div class="spot">
  <div class="inner">
    <h1>
      TO DO LIST DEMO APP
    </h1>
    <p>
      Do it now!
    </p>
  </div>
</div>
<div class="container">
  <div class="inner">
    <div class="todo_wrap">
      <input type="button" value="할일 추가" class="button_todo_add">
      <div class="todo_list_wrap">
        <div class="todo_list_category">
          <div>#</div>
          <div>Task Name</div>
          <div>Status</div>
          <div>Edit</div>
          <div>Remove</div>
        </div>
        <ul class="todo_list">
          <li class="todo_list_item">
            <div class="do_number">24</div>
            <div class="do_task">방 치우기</div>
            <div class="do_status">
              <span class="status todo">
                ToDo
              </span>
            </div>
            <div class="do_edit">
              <button class="button_edit"><span class="blind">수정버튼</span></button>
            </div>
            <div class="do_remove">
              <button class="button_del"><span class="blind">지우기버튼</span></button>
            </div>
          </li>
          <li class="todo_list_item">
            <div class="do_number">25</div>
            <div class="do_task">책상 치우기</div>
            <div class="do_status">
              <span class="status in_progress">
                In Progress
              </span>
            </div>
            <div class="do_edit">
              <button class="button_edit"><span class="blind">수정버튼</span></button>
            </div>
            <div class="do_remove">
              <button class="button_del"><span class="blind">지우기버튼</span></button>
            </div>
          </li>
          <li class="todo_list_item">
            <div class="do_number">26</div>
            <div class="do_task">회사 치우기</div>
            <div class="do_status">
              <span class="status complete">
                Complete
              </span>
            </div>
            <div class="do_edit">
              <button class="button_edit"><span class="blind">수정버튼</span></button>
            </div>
            <div class="do_remove">
              <button class="button_del"><span class="blind">지우기버튼</span></button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
  `;

  root.appendChild(div);
}

render();
