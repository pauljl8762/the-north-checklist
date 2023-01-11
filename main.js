let todoContainer = document.querySelector('.todo-container');
let completedContainer = document.querySelector('.completed-container');

todoContainer.addEventListener('click', function(event) {
  if (event.target.className === 'view-full') {
    let todoItem = event.target.parentNode;
    let viewFullButton = event.target;
    if(todoItem.classList.contains('full-size')){
      todoItem.classList.remove('full-size');
      viewFullButton.textContent = 'View Full Size';
    }else{
    todoItem.classList.add('full-size');
    viewFullButton.textContent = 'Close';
    }
  }
  else if (event.target.className === 'complete-button') {
    let todoItem = event.target.parentNode;
    let completeButton = event.target;

    if (event.target.textContent === 'Complete') {
      completeButton.textContent = 'Undo';
      
      // Get the current index of the todoItem
      let index = Array.prototype.indexOf.call(todoContainer.children, todoItem);
      
      // Add a data attribute to the todoItem
      todoItem.setAttribute('data-index', index);
      
      todoContainer.removeChild(todoItem);
      completedContainer.appendChild(todoItem);
    }
  }
});

completedContainer.addEventListener('click', function(event) {
  if (event.target.className === 'complete-button') {
    let todoItem = event.target.parentNode;
    let completeButton = event.target;
    if(event.target.textContent === 'Undo'){
      completeButton.textContent = 'Complete';
      
      // Get the index from the todoItem's data attribute
      let index = todoItem.getAttribute('data-index');
      
      // Remove the data attribute from the todoItem
      todoItem.removeAttribute('data-index');
      
      // insert the todo item back to the correct position
      todoContainer.insertBefore(todoItem, todoContainer.children[index]);
      completedContainer.removeChild(todoItem);
    }
  }
});
