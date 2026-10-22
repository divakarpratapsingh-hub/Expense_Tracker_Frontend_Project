
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

// Add a new task
addButton.addEventListener("click", function() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        message.textContent = "Please enter a task.";
        return;
    }

    message.textContent = "";

    // Create a new list item
    const li = document.createElement("li");

    // Create a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create the task text
    const span = document.createElement("span");
    span.textContent = taskText;
    span.classList.add("task-text");

    // Mark task as completed
    checkbox.addEventListener("change", function() {
        span.classList.toggle("completed", checkbox.checked);
    });

    // Create the delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    // Delete the task
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    // Add elements to the list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    // Add the task to the webpage
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
    taskInput.focus();
});
