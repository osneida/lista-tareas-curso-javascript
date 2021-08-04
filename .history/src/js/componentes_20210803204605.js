import { Todo } from "../classes";

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
        const nuevoTodo = new Todo( inputNewTodo.value )
    }    
})