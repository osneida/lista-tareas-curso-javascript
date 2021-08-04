
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );
  
todoList.totalPendientes;

//const tarea = new Todo('Aprender JavaScript');
//tarea.completado = true;

//todoList.nuevoTodo( tarea );

//crearTodoHtml ( tarea );

