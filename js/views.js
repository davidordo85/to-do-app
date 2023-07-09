export const taskListView = (task, i) => {
  return `<p>${task}</p>
  <div class="button-container">
  <button id="complete-${i}" class="complete">Completada</button>
  <button id="delete-${i}" class="delete">Eliminar</button>
  </div>`;
};
