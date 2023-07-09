import { taskListView } from '../views.js';
import BaseController from './BaseController.js';

export default class TaskAddController extends BaseController {
  constructor(element, task) {
    super(element);
    this.element = element;
    this.task = task;
    this.i = 0;
    this.normalizeText(this.task.taskMessage);
  }

  normalizeText(taskValue) {
    let task = taskValue.trim();
    task = task.charAt(0).toUpperCase() + task.slice(1);
    task = task.replace(/[^\w\s]/gi, '');
    const allTask = { taskMessage: task, ...this.task };
    this.addTaskList(allTask);
  }

  addTaskList(allTask) {
    const taskList = document.createElement('li');
    taskList.classList.add('list-element');
    taskList.innerHTML = taskListView(allTask, this.i);
    this.element.appendChild(taskList);
    this.i++;
  }
}
