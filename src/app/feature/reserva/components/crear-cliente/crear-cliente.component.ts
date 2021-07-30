import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/feature/cliente/shared/service/cliente.service';
import swal from 'sweetalert2';
import { Cliente } from 'src/app/feature/cliente/shared/model/cliente';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(protected clienteServices: ClienteService, private router: Router) { }

  ngOnInit() {
    this.construirFormularioCliente();
  }

  crear() {
    console.log(this.clienteForm.value)
    var clienteFormateado = this.construirCliente(this.clienteForm);
    this.clienteServices.guardar(clienteFormateado).subscribe(response => {
      if (response) {
        localStorage.setItem("identificacionCliente", clienteFormateado.identificacion.toString())
        swal.fire("El cliente se registrado satisfactoriamente.", "Ahora realiza tus reservas");
        this.router.navigate(["./reserva/listar-reservas/"]);
      }
    }, err => {
      swal.fire(err.error.mensaje, err.error.nombreExcepcion);
    }
    );
  }

  private construirFormularioCliente() {
    this.clienteForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required, Validators.minLength(6)]),
      correoElectronico: new FormControl('', [Validators.required, Validators.email]),
      numTelefono: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
    });
  }

  private construirCliente(clienteFormulario: FormGroup) {

    var datePipe = new DatePipe("en-US");

    return new Cliente(
      null, clienteFormulario.get('nombre').value,
      clienteFormulario.get('identificacion').value,
      clienteFormulario.get('correoElectronico').value,
      clienteFormulario.get('numTelefono').value,
      datePipe.transform(clienteFormulario.get('fechaNacimiento').value, 'yyyy-MM-dd HH:mm:ss')
    );
  }

}
