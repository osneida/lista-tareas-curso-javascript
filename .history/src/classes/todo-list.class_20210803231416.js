

export class TodoList {

    constructor() {

        this.todos = [];

    }

    nuevoTodo( todo ){
        this.todos.push( todo );
    }

    eliminarTodo( id ){

        this.todos = this.todos.filter( todo => todo.id != id)
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {
        
        for ( const todo of this.todos ){

            if( todo.id == id ){
                todo.completado = !todo.completado
                break;
            }
        }
    }

    eliminarCompletado() {
        this.todos = this.todos.filter( todo => !todo.completado) //selecciono los que no estan compeltado y con ello lleno de nuevo sin los completados
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', this.todos);
    }

    cargarLocalStorage(){

    }
}