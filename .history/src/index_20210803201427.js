
import { Todo, TodoList } from './classes';

import './styles.css';

const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');

todoList.nuevoTodo( tarea );

console.log( todoList );

