
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

import './styles.css';

const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Aprender Node');

tarea.completado = true;
todoList.nuevoTodo( tarea );


console.log( todoList );

crearTodoHtml ( tarea );
crearTodoHtml ( tarea2 );