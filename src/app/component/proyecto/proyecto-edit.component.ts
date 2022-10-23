import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyecto-edit',
  templateUrl: './proyecto-edit.component.html',
  styleUrls: ['./proyecto-edit.component.css']
})
export class ProyectoEditComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(private proyectoService: ProyectoService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(
      data => {
        this.proyecto = data;
      }, err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectoService.update(id, this.proyecto).subscribe(
      data => {
        this.showSuccess();
        this.router.navigate(['']);
      }, err => {
        this.showError();
        this.router.navigate(['']);
      }
    )
  }

  showError(){
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      html: 'No pudo modificarse el <b>proyecto</b>',
      showConfirmButton: false,
      timer: 3000
    })
  }

  showSuccess(){
    Swal.fire({
      icon: 'success',
      title: '¡Proyecto modificado!',
      showConfirmButton: false,
      timer: 3000
    })
  }
}