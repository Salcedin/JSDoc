/**
 * Representa una tarea.
 * @class
 */
class Task {
    /**
     * Crea una nueva tarea.
     * @param {string} text - El texto de la tarea.
     */
    constructor(text) {
        this.text = text; // El texto de la tarea
        this.completed = false; // Indica si la tarea está completada o no
    }
}

/**
 * Gestiona las tareas.
 * @class
 */
class TaskManager {
    /**
     * Inicializa el administrador de tareas.
     */
    constructor() {
        // Obtiene las tareas almacenadas en el localStorage, si no hay, crea una lista vacía
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    /**
     * Agrega una nueva tarea a la lista y actualiza el localStorage.
     * @param {string} text - El texto de la nueva tarea.
     */
    addTask(text) {
        const task = new Task(text); // Crea una nueva tarea
        this.tasks.push(task); // Agrega la tarea a la lista
        this.updateLocalStorage(); // Actualiza el localStorage
    }

    /**
     * Elimina una tarea de la lista por su índice y actualiza el localStorage.
     * @param {number} index - El índice de la tarea a eliminar.
     */
    removeTask(index) {
        this.tasks.splice(index, 1); // Elimina la tarea de la lista
        this.updateLocalStorage(); // Actualiza el localStorage
    }

    /**
     * Cambia el estado completado de una tarea y actualiza el localStorage.
     * @param {number} index - El índice de la tarea cuyo estado completado se debe cambiar.
     */
    toggleTaskCompleted(index) {
        this.tasks[index].completed = !this.tasks[index].completed; // Cambia el estado completado de la tarea
        this.updateLocalStorage(); // Actualiza el localStorage
    }

    /**
     * Actualiza el localStorage con la lista actual de tareas.
     */
    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks)); // Guarda la lista de tareas en el localStorage
    }

    /**
     * Obtiene la lista actual de tareas.
     * @returns {Task[]} - La lista de tareas.
     */
    getTasks() {
        return this.tasks; // Devuelve la lista de tareas
    }
}

// Instancia del administrador de tareas
const taskManager = new TaskManager();

/**
 * Agrega una tarea nueva.
 */
function addTask() {
    const taskInput = document.getElementById('taskInput'); // Obtiene el input de la tarea
    const text = taskInput.value.trim(); // Obtiene el texto de la tarea y elimina espacios en blanco al principio y al final
    if(text) { // Verifica si el texto no está vacío
        taskManager.addTask(text); // Agrega la tarea al administrador de tareas
        taskInput.value = ''; // Limpia el input
        renderTasks(); // Renderiza las tareas
    }
}

/**
 * Elimina una tarea.
 * @param {number} index - El índice de la tarea a eliminar.
 */
function deleteTask(index) {
    taskManager.removeTask(index); // Elimina la tarea del administrador de tareas
    renderTasks(); // Renderiza las tareas
}

/**
 * Renderiza las tareas en la lista.
 */
function renderTasks() {
    const taskList = document.getElementById('taskList'); // Obtiene la lista de tareas
    taskList.innerHTML = ''; // Limpia la lista de tareas
    taskManager.getTasks().forEach((task, index) => { // Recorre todas las tareas
        const taskEl = document.createElement('li'); // Crea un elemento de lista para cada tarea
        const taskText = document.createElement('span'); // Crea un elemento span para el texto de la tarea
        taskText.textContent = task.text; // Establece el texto de la tarea
        taskText.style.flexGrow = '1'; // Establece flex-grow para que ocupe todo el espacio disponible
        if(task.completed) { // Si la tarea está completada
            taskText.style.textDecoration = 'line-through'; // Agrega una línea a través del texto
        }
        
        // Botón para borrar tarea
        const deleteBtn = document.createElement('button'); // Crea un botón para borrar la tarea
        deleteBtn.textContent = 'Borrar'; // Establece el texto del botón
        deleteBtn.onclick = () => deleteTask(index); // Agrega un controlador de eventos para borrar la tarea al hacer clic en el botón
        deleteBtn.style.marginLeft = '10px'; // Establece un margen izquierdo para separar el botón del texto
        deleteBtn.classList.add('buttonB'); // Añade una clase al botón
        
        taskEl.appendChild(taskText); // Añade el texto de la tarea al elemento de lista
        taskEl.appendChild(deleteBtn); // Añade el botón de borrar al elemento de lista
        taskList.appendChild(taskEl); // Añade el elemento de lista a la lista de tareas
    });
}

/**
 * Cambia el estado completado de una tarea y renderiza las tareas.
 * @param {number} index - El índice de la tarea cuyo estado completado se debe cambiar.
 */
function toggleTaskCompleted(index) {
    taskManager.toggleTaskCompleted(index); // Cambia el estado completado de la tarea en el administrador de tareas
    renderTasks(); // Renderiza las tareas
}

// Evento click para agregar una tarea al hacer clic en el botón de agregar tarea
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Renderiza las tareas al cargar la página
renderTasks();
