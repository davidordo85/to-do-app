import BaseController from './BaseController.js';
import TaskAddController from './TaskAddController.js';
import TaskCompleteController from './TaskCompleteController.js';
import TaskDeleteController from './TaskDeleteController.js';

export default class ButtonController extends BaseController {
  constructor(element) {
    super(element);
    this.handleClick();
  }

  handleClick() {
    this.element.addEventListener('click', event => {
      event.preventDefault();
      const button = event.target.classList.value;
      const element = event.target.parentElement.parentElement;
      console.log(button);
      if (button === 'buttonAdd') {
        const form = event.target.form;
        const task = form.elements.taskInput.value;
        const taskList = document.querySelector('.task-list');
        new TaskAddController(taskList, task);
      } else if (button === 'delete') {
        new TaskDeleteController(element);
      } else if (button === 'complete') {
        new TaskCompleteController(element);
      }
    });
  }
}
