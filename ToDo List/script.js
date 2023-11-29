const taskInput = document.getElementById('taskInput');
const AddTask = document.getElementById('AddTask');
const taskList = document.getElementById('taskList');

AddTask.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value;
    if(taskText == ""){
        alert("Please Enter Task First")
    } else {
        const ul = document.createElement('ul');
        ul.innerHTML =`${taskText} <i class="fa-solid fa-trash-can"></i> <i class="fa-solid fa-pen-to-square"></i>`;
        taskList.appendChild(ul);
        taskInput.value = '';

    }
}