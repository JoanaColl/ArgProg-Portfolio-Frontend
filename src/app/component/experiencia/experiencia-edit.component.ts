import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})
export class ExperienciaEditComponent implements OnInit {
  experiencia: Experiencia = null;

  constructor(private experienciaService: ExperienciaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.detail(id).subscribe(
      data => {
        this.experiencia = data;
      }, err => {
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.update(id, this.experiencia).subscribe(
      data => {
        this.showSuccess();
        this.router.navigate(['']);
      }, err => {
        this.showError();
        // alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  showError(){
    Swal.fire({
      icon: 'error',
      title: '¡Error!',
      html: 'No pudo modificarse la <b>experiencia</b>',
      showConfirmButton: false,
      timer: 3000
    })
  }

  showSuccess(){
    Swal.fire({
      icon: 'success',
      title: '¡Experiencia modificada!',
      showConfirmButton: false,
      timer: 3000
    })
  }
}