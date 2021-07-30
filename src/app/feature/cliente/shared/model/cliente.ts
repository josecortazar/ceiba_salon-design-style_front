export class Cliente {
    id: number;
    nombre: string;
    identificacion: string;
    correoElectronico: string;
    numTelefono: string;
    fechaNacimiento: string;

    constructor(id: number, nombre: string, identificacion: string,
        correoElectronico: string,
        numTelefono: string,
        fechaNacimiento: string,) {
        this.id = id;
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.correoElectronico = correoElectronico;
        this.numTelefono = numTelefono;
        this.fechaNacimiento = fechaNacimiento;

    }
}
