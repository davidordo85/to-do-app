export const taskListView = (task, i) => {
  return `<p>Tarea: ${task.taskMessage}</p>
  ${task.taskDate !== '' ? `<p>Fecha de vencimiento: ${task.taskDate}</p>` : ''}
  ${task.taskPriority !== '' ? `<p>Prioridad: ${task.taskPriority}</p>` : ''}  
  <div class="button-container">
  <button id="complete-${i}" class="complete">Completada</button>
  <button id="delete-${i}" class="delete">Eliminar</button>
  </div>`;
};
