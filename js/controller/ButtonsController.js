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
        const taskValue = form.elements.taskInput.value;
        const taskList = document.querySelector('.task-list');
        const errorElement = form.querySelector('.error-message');
        this.error(taskValue, errorElement, taskList, form);
      } else if (button === 'delete') {
        new TaskDeleteController(element);
      } else if (button === 'complete') {
        new TaskCompleteController(element);
      }
    });
  }

  error(taskValue, errorElement, taskList, form) {
    if (taskValue.length >= 5) {
      const task = this.normalizeText(taskValue);
      new TaskAddController(taskList, task);
      form.removeChild(errorElement);
    } else {
      if (!errorElement) {
        const errorElement = document.createElement('p');
        errorElement.textContent = 'El texto debe tener al menos 5 caracteres.';
        errorElement.classList.add('error-message');
        form.appendChild(errorElement);
      }
    }
  }

  normalizeText(taskValue) {
    let task = taskValue.trim();
    task = task.charAt(0).toUpperCase() + task.slice(1);
    task = task.replace(/[^\w\s]/gi, '');
    return task;
  }
}
