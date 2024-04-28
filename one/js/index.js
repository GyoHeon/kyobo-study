console.log("hi man");

function render() {
  const root = document.getElementById("app");
  
  const todolist_wrap = document.createElement("div");
  todolist_wrap.className = "todolist_wrap";

  const todolist_headerwrap = document.createElement("div");
  todolist_headerwrap.className = "todolist_headerwrap";
  
  const todolist_header = document.createElement("h1");
  todolist_header.className = "todolist_header";
  todolist_header.textContent = "TODO List Demo App";

  const todolist_subheader = document.createElement("span");
  todolist_subheader.className = "todolist_subheader";
  todolist_subheader.textContent = "Do it now.";

  const todolist_inputwrap = document.createElement("div");
  todolist_inputwrap.className = "todolist_inputwrap";

  const todolist_input = document.createElement("input");
  todolist_input.className = "todolist_input";
  todolist_input.placeholder = "Add your task";

  const todolist_inputbtn = document.createElement("button");
  todolist_inputbtn.className = "todolist_inputbtn";
  todolist_inputbtn.textContent = "Add Task";

  const todolist_list = document.createElement("ul");
  todolist_list.className = "todolist_list";

  const todolist_itemheader = document.createElement("li");
  todolist_itemheader.className = "todolist_item" + " "   
  + "todolist_itemheader";

  const todolist_number = document.createElement("div");
  todolist_number.className = "todolist_number";
  todolist_number.textContent = "Number";

  const todolist_name = document.createElement("div");
  todolist_name.className = "todolist_name";
  todolist_name.textContent = "TaskName";

  const todolist_status = document.createElement("div");
  todolist_status.className = "todolist_status";
  todolist_status.textContent = "Status";

  const todolist_edit = document.createElement("div");
  todolist_edit.className = "todolist_edit";
  todolist_edit.textContent = "Edit";

  const todolist_remove = document.createElement("div");
  todolist_remove.className = "todolist_remove";
  todolist_remove.textContent = "Remove";

  todolist_itemheader.appendChild(todolist_number);
  todolist_itemheader.appendChild(todolist_name);

  todolist_itemheader.appendChild(todolist_status);

  todolist_itemheader.appendChild(todolist_edit);

  todolist_itemheader.appendChild(todolist_remove);

  todolist_list.appendChild(todolist_itemheader);


  const todoItems = [
    { Number: "24", TaskName: "Buy Grocey", status: "Todo", statusClass:"todo" },
    { Number: "25", TaskName: "Send Email", status: "In Progress", statusClass:"inProgress"  },
    { Number: "28", TaskName: "Finish Assignment", status: "Complete", statusClass:"complete"  },
    { Number: "30", TaskName: "Bake Cake", status: "Todo", statusClass:"todo"  },
    { Number: "31", TaskName: "Write Blog post", status: "In Progress", statusClass:"inProgressActive"  },
  ];

  todoItems.forEach(item => {
    const todolist_item = document.createElement("li");
    todolist_item.className = "todolist_item";

    const todolist_number = document.createElement("div");
    todolist_number.className = "todolist_number";
    todolist_number.textContent = item.Number;

    const todolist_name = document.createElement("div");
    todolist_name.className = "todolist_name";
    todolist_name.textContent = item.TaskName;

    const todolist_status = document.createElement("div");
    todolist_status.className = "todolist_status";
    const todolist_statusbadge = document.createElement("span");
    todolist_statusbadge.textContent = item.status;
    todolist_statusbadge.className = "todolist_statusbadge " + item.statusClass;


    const todolist_edit = document.createElement("div");
    todolist_edit.className = "todolist_edit";
    const todolist_editbtn = document.createElement("button");
    todolist_editbtn.textContent = "Edit";
    todolist_editbtn.className = "todolist_editbtn";

    const todolist_remove = document.createElement("div");
    todolist_remove.className = "todolist_remove";
    const todolist_removebtn = document.createElement("button");
    todolist_removebtn.textContent = "Remove";
    todolist_removebtn.className = "todolist_removebtn";

    todolist_item.appendChild(todolist_number);
    todolist_item.appendChild(todolist_name);

    todolist_item.appendChild(todolist_status);
    todolist_status.appendChild(todolist_statusbadge);

    todolist_item.appendChild(todolist_edit);
    todolist_edit.appendChild(todolist_editbtn);

    todolist_item.appendChild(todolist_remove);
    todolist_remove.appendChild(todolist_removebtn);

    todolist_list.appendChild(todolist_item);
  });



  todolist_wrap.appendChild(todolist_headerwrap);
  todolist_headerwrap.appendChild(todolist_header);
  todolist_headerwrap.appendChild(todolist_subheader);

  todolist_wrap.appendChild(todolist_inputwrap);
  todolist_inputwrap.appendChild(todolist_input);
  todolist_inputwrap.appendChild(todolist_inputbtn);

  todolist_wrap.appendChild(todolist_list);

  root.appendChild(todolist_wrap);
}

render();