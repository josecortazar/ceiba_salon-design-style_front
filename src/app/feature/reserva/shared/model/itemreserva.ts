export class Itemreserva {
    id: number;
    idReserva: number;
    idServicio: number;
    nombre: string;
    valor: number;

    constructor(id: number,
        idReserva: number,
        idServicio: number,
        nombre: string,
        valor: number) {

        this.id = id;
        this.idReserva = idReserva;
        this.idServicio = idServicio;
        this.nombre = nombre;
        this.valor = valor;

    }

}
