export class Reserva {
    id: number;
    idCliente: number;
    fechaCreacion: string;
    fechaReserva: string;
    precioNeto: number;
    modificacadorPrecio: number;
    cantidadServicios: number;
    esReservaDeMenor: boolean;

    constructor(id: number, idCliente: number, fechaCreacion: string, 
        fechaReserva: string, precioNeto: number, modificacadorPrecio: 
        number, cantidadServicios: number, esReservaDeMenor: boolean,) {

        this.id = id;
        this.idCliente = idCliente;
        this.fechaCreacion = fechaCreacion;
        this.fechaReserva = fechaReserva;
        this.precioNeto = precioNeto;
        this.modificacadorPrecio = modificacadorPrecio;
        this.cantidadServicios = cantidadServicios;
        this.esReservaDeMenor = esReservaDeMenor;

    }
}
