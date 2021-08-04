import { Todo } from "../classes";
import { todoList } from "../index";

//referencia al html
const divTodoList = document.querySelector('.todo-list');
const inputNewTodo= document.querySelector('.new-todo');

export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `<li class="${ (todo.completado) ? 'completed' : '' }" data-id=${ todo.id }>
                    <div class="view">
                        <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' } >
                        <label>${ todo.tarea }</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="Create a TodoMVC template">
                    </li>`;

        const div = document.createElement('div');
        div.innerHTML = htmlTodo;
        
        
        divTodoList.append( div.firstElementChild );

        return div.firstElementChild;
}


//eventos

inputNewTodo.addEventListener('keyup', ( ev ) => {

    if (ev.keyCode === 13 && inputNewTodo.value.length > 0) {

        console.log( inputNewTodo.value );
        const nuevoTodo = new Todo( inputNewTodo.value );

        todoList.nuevoTodo( nuevoTodo );

        crearTodoHtml( nuevoTodo );
        inputNewTodo.value='';

    }    
});

divTodoList.addEventListener('click', ( ev ) => {

   const nombreElemento = ev.target.localName;  //input, label button
   const todoElemento   = ev.target.parentElement.parentElement;  

   const todoId = todoElemento.getAttribute('data-id');

   console.log(todoId);

});