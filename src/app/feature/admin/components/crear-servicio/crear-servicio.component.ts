import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/feature/servicio/shared/model/servicio';
import { ServicioService } from 'src/app/feature/servicio/shared/service/servicio.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.scss']
})
export class CrearServicioComponent implements OnInit {

  servicioForm: FormGroup;

  constructor(protected servicioServices: ServicioService, private router: Router) { }

  ngOnInit() {
    this.construirFormularioCliente();
  }

  crear() {
    console.log(this.servicioForm.value)
    var clienteFormateado = this.construirCliente(this.servicioForm);
    this.servicioServices.guardar(clienteFormateado).subscribe(response => {
      if (response) {
        swal.fire("El servicio se ha registrado satisfactoriamente.", "Ahora realiza tus reservas");
        this.router.navigate(["./admin/listar-servicios"]);
      }
    }, err => {
      swal.fire(err.error.mensaje, err.error.nombreExcepcion);
    }
    );
  }

  private construirFormularioCliente() {
    this.servicioForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(6)]),
      valor: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required])
    });
  }

  private construirCliente(clienteFormulario: FormGroup) {


    return new Servicio(
      null, clienteFormulario.get('nombre').value,
      clienteFormulario.get('descripcion').value,
      clienteFormulario.get('valor').value,
      clienteFormulario.get('imagen').value
    );
  }

}
