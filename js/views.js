export const taskListView = (task, i) => {
  return `<p>${task}</p>
  <div class="button-container">
  <button id="complete-${i}" class="complete">Tarea completada</button>
  <button id="delete-${i}" class="delete">Eliminar tarea</button>
  </div>`;
};
