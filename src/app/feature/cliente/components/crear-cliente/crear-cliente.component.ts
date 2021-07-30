import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../shared/service/cliente.service';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 6;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 16;

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})

export class CrearClienteComponent implements OnInit {

  clienteForm: FormGroup;

  constructor(protected clienteService: ClienteService) { }

  ngOnInit() {
    this.construirFormularioCliente();
  }

  crear() {
    console.log(this.clienteForm.value)

    this.clienteService.guardar(this.clienteForm.value);
  }

  private construirFormularioCliente() {
    this.clienteForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
      Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      correoElectronico: new FormControl('', [Validators.required, Validators.email]),
      numTelefono: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
    });
  }

}
