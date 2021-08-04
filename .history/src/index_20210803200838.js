import { TodoList } from './classes/todo-list.class.js';
import { Todo } from './classes/todo.class.js';

import './styles.css';

const todoList = new TodoList();
const tarea = new Todo('Aprender JavaScript');

console.log( tarea );

