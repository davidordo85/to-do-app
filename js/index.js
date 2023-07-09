import ButtonController from './controller/ButtonsController.js';

window.addEventListener('DOMContentLoaded', async event => {
  console.log(event);
  const container = document.querySelector('.task-container');
  new ButtonController(container);
});
