const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

// 1. Function to add a new task
function addtask() {
    if (inputBox.value.trim() === '') { // Use .trim() to handle whitespace
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Close icon
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear the input box after adding
    saveData(); // Save data after adding a task
}

// 2. Event listener for handling task clicks and deletion
listcontainer.addEventListener("click", function (e) {
    // Check if the clicked element is an <li> (task item)
    if (e.target.tagName === "LI") { 
        e.target.classList.toggle("checked"); // Use the correct class name "checked"
        saveData();
    } 
    // Check if the clicked element is a <span> (delete button)
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the parent <li> element
        saveData();
    }
}, false);

// 3. Function to save task data to Local Storage
function saveData() {
    // Note: Removed extra space in "data " key
    localStorage.setItem("data", listcontainer.innerHTML); 
}

// 4. Function to load tasks from Local Storage
function showTask() {
    // Note: Corrected the logic and placement for loading data
    listcontainer.innerHTML = localStorage.getItem("data"); 
}

// Call showTask once to load data when the script runs
showTask();