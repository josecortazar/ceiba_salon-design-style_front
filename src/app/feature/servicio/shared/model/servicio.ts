export class Servicio {

    id: number;
    nombre: string;
    descripcion: string;
    valor: number;
    imagen: string;

    constructor(id: number, nombre: string, descripcion: string, valor: number, imagen: string) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.valor = valor;
        this.imagen = imagen;
    }

}
