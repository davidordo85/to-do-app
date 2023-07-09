import { taskListView } from '../views.js';
import BaseController from './BaseController.js';

export default class TaskAddController extends BaseController {
  constructor(element, task) {
    super(element);
    this.element = element;
    this.task = task;
    this.i = 0;
    this.addTaskList();
  }

  addTaskList() {
    const taskList = document.createElement('li');
    taskList.classList.add('list-element');
    taskList.innerHTML = taskListView(this.task, this.i);
    this.element.appendChild(taskList);
    this.i++;
  }
}
