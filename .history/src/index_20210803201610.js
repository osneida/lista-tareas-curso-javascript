
import { Todo, TodoList } from './classes';

import './styles.css';

const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Aprender Node');

todoList.nuevoTodo( tarea );
todoList.nuevoTodo( tarea2 );

console.log( todoList );

