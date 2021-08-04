

export class Todo {

    constructor( tarea ) {

        this.tarea = tarea;

        this.id         = new Data().getTime();
        this.completado = false;
        this.creado     = new Date();

        
    }
}