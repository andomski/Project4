var addBtn = document.getElementById("add-task-btn");
var input = document.getElementById("new-task-input");
var mainContent = document.querySelector(".main-content");
var toggleBtn = document.getElementById("menu-toggle");
var sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
});

addBtn.addEventListener("click", function () {
    var taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var newWidgetDiv = document.createElement("div");
    newWidgetDiv.className = "widget task-item";

    var newLabel = document.createElement("label");
    newLabel.className = "mini-container";

    var newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";

    var newCheckmark = document.createElement("span");
    newCheckmark.className = "checkmark";

    var taskTextSpan = document.createElement("span");
    taskTextSpan.className = "task-text";
    taskTextSpan.textContent = taskText;

    newLabel.appendChild(newCheckbox);
    newLabel.appendChild(newCheckmark);
    newLabel.appendChild(taskTextSpan);

    var buttonContainer = document.createElement("div");
    buttonContainer.className = "task-buttons";

    //Editing
    var editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", function () {
        var newText = prompt("Edit task:", taskTextSpan.textContent);
        if (newText !== null && newText.trim() !== "") {
            taskTextSpan.textContent = newText.trim();
        }
    });

    //Deleting
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
        mainContent.removeChild(newWidgetDiv);
    });

    buttonContainer.appendChild(editBtn);
    buttonContainer.appendChild(deleteBtn);

    newWidgetDiv.appendChild(newLabel);
    newWidgetDiv.appendChild(buttonContainer);
    mainContent.appendChild(newWidgetDiv);

    input.value = "";
});