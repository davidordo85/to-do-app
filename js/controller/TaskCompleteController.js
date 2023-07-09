import BaseController from './BaseController.js';

export default class TaskCompleteController extends BaseController {
  constructor(element) {
    super(element);
    this.destiny = document.querySelector('.task-list-complete');
    this.removeComplete();
  }

  removeComplete() {
    this.destiny.appendChild(this.element);
  }
}
