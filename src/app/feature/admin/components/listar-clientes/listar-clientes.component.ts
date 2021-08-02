import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/feature/cliente/shared/model/cliente';
import { ClienteService } from 'src/app/feature/cliente/shared/service/cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {

  public listaClientes: Observable<Cliente[]>;
  public conConsulta: boolean = false;
  public esConsultaVacia: boolean = false;

  constructor(protected clienteService: ClienteService) { }

  ngOnInit() {
    this.listaClientes = this.clienteService.consultar();
    this.listaClientes.subscribe(
        data => {
          console.log(data[0])
          if (data[0] != null) {
            this.conConsulta = true;
          } else {
            this.esConsultaVacia = true;
            swal.fire("No hay clientes registrados actualmente.", "OK.");
          }
        }, err => {
          swal.fire(err.error.mensaje, err.error.nombreExcepcion);
        });
  }

  eliminar(cliente: Cliente) {
    this.clienteService.eliminar(cliente).subscribe(data => {
      swal.fire("El cliente se elimino satisfactoriamente.");
      console.log(data);
      this.listaClientes = this.clienteService.consultar();
    }
    );
  }

}
