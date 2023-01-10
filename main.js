let todoContainer = document.querySelector('.todo-container');
let completedContainer = document.querySelector('.completed-container');

todoContainer.addEventListener('click', function(event) {
  if (event.target.className === 'complete-button') {
    let todoItem = event.target.parentNode;
    let completeButton = event.target;

    if (event.target.textContent === 'Complete') {
      completeButton.textContent = 'Undo';
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
      completedContainer.removeChild(todoItem);
      todoContainer.appendChild(todoItem);
    }
  }
});
