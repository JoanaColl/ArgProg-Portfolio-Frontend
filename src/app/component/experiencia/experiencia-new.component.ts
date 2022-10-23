import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia-new',
  templateUrl: './experiencia-new.component.html',
  styleUrls: ['./experiencia-new.component.css']
})
export class ExperienciaNewComponent implements OnInit {
  tituloEx: string = "";
  empleador: string = "";
  fechaInicio: number = null;
  fechaFin: number = null;
  descripcionEx: string = "";

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const experiencia = new Experiencia(this.tituloEx, this.empleador, this.fechaInicio, this.fechaFin, this.descripcionEx);
    this.experienciaService.save(experiencia).subscribe(
      data => {
        this.showSuccess();
        this.router.navigate(['']);
      }, err => {
        this.showError();
        this.router.navigate(['']);
      })
  }

  showError(){
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      html: 'No pudo añadirse la <b>experiencia</b>',
      showConfirmButton: false,
      timer: 3000
    })
  }

  showSuccess(){
    Swal.fire({
      icon: 'success',
      title: '¡Experiencia añadida!',
      showConfirmButton: false,
      timer: 3000
    })
  }
}