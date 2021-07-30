import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Cliente[]>(`${environment.endpoint}/clientes/`,
      this.http.optsName('Listar los clientes'));
  }

  public consultarIdentificacion(identificacion:number) {
    return this.http.doGet<Cliente>(`${environment.endpoint}/clientes/`+identificacion,
      this.http.optsName('Obtener un cliente'));
  }


  public guardar(cliente: Cliente) {
    console.log(cliente);
    return this.http.doPost<Cliente, boolean>(`${environment.endpoint}/clientes/`, cliente,
      this.http.optsName('crear/actualizar cliente'));
  }

  public eliminar(cliente: Cliente) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/clientes/${cliente.identificacion}`,
      this.http.optsName('eliminar cliente'));
  }

}