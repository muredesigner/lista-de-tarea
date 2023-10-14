const readline = require('readline-sync');

let tasks = [];

function addTask() {
  const id = tasks.length + 1;
  const description = readline.question('Introduce la descripción de la tarea: ');
  const completed = false;
  tasks.push({ id, description, completed });
  console.log(`Tarea ${id} añadida.`);
}

function deleteTask() {
  const id = readline.questionInt('Introduce el ID de la tarea a eliminar: ');
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    console.log(`Tarea ${id} eliminada.`);
  } else {
    console.log(`No se encontró ninguna tarea con ID ${id}.`);
  }
}

function completeTask() {
  const id = readline.questionInt('Introduce el ID de la tarea a completar: ');
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks[index].completed = true;
    console.log(`Tarea ${id} completada.`);
  } else {
    console.log(`No se encontró ninguna tarea con ID ${id}.`);
  }
}

function showTasks() {
  console.log('ID\tDescripción\tCompletada');
  tasks.forEach(task => console.log(`${task.id}\t${task.description}\t${task.completed ? 'Sí' : 'No'}`));
}

while (true) {
  console.log('\n¿Qué acción deseas realizar?');
  console.log('1. Añadir tarea');
  console.log('2. Eliminar tarea');
  console.log('3. Completar tarea');
  console.log('4. Mostrar tareas');
  console.log('5. Salir');
  
  const option = readline.questionInt('> ');
  
  switch (option) {
    case 1:
      addTask();
      break;
    case 2:
      deleteTask();
      break;
    case 3:
      completeTask();
      break;
    case 4:
      showTasks();
      break;
    case 5:
      process.exit(0);
    default:
      console.log('Opción inválida.');
      break;
  }
}
