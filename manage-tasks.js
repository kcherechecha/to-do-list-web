function addTask() {
  var taskInput = document.getElementById("task-input");
  var taskList = document.getElementById("task-list");
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "button-delete-task";
    deleteButton.onclick = function () {
      taskList.removeChild(taskItem);
      saveTasks();
    };

    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    taskInput.value = "";

    saveTasks();
  }
}

function clearTasks() {
  var taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  localStorage.removeItem("tasks");
}

var clearButton = document.createElement("button");
clearButton.textContent = "Delete all tasks";
clearButton.className = "button-delete";
clearButton.onclick = clearTasks;
document.body.appendChild(clearButton);
