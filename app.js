
// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load event listensers
loadEventListeners()

function loadEventListeners() {
    form.addEventListener('submit', addTask);

    taskList.addEventListener('click' , removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup',filterTasks);
}

// Add Task
function addTask(e) {
    if(taskInput.value === '') {
      alert('Add a task');
    }
  
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
  
    // Append li to ul
    taskList.appendChild(li);
  
    // Clear input
    taskInput.value = '';
  
    e.preventDefault();
  }

 function removeTask(e) {
   if(e.target.parentElement.classList.contains('delete-item'))
   {
      if(confirm("are you sure?")) {
    e.target.parentElement.parentElement.remove();
}
   }
  
 }

function clearTasks() {
    taskList.innerHTML = '';
}
 
function filterTasks(e) {
const text = e.target.value.toLowercase();
document.querySelectorAll('collection-item').forEach(
    function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'blcok';
        }
        else {
            task.style.display = 'none';
            }
    }
);
}