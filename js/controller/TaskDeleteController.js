import BaseController from './BaseController.js';

export default class TaskDeleteController extends BaseController {
  constructor(element) {
    super(element);
    this.removeElement();
  }

  removeElement() {
    this.element.remove();
  }
}
