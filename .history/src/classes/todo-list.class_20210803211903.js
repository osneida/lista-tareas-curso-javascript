

export class TodoList {

    constructor() {

        this.todos = [];

    }

    nuevoTodo( todo ){
        this.todos.push( todo );
    }

    eliminarTodo( id ){

    }

    marcarCompletado( id ) {
        
        for ( const todo of this.Todos ){

            if( todo.id == id ){
                todo.completado = !todo.completado
                break;
            }
        }
    }

    eliminarCompletado() {

    }
}