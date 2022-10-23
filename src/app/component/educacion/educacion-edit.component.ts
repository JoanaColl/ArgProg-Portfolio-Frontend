import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-educacion-edit',
  templateUrl: './educacion-edit.component.html',
  styleUrls: ['./educacion-edit.component.css']
})
export class EducacionEditComponent implements OnInit {
  educacion: Educacion = null;
  
  constructor(private educacionService: EducacionService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar educacion");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.update(id, this.educacion).subscribe(
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
      html: 'No pudo modificarse la <b>educación</b>',
      showConfirmButton: false,
      timer: 3000
    })
  }

  showSuccess(){
    Swal.fire({
      icon: 'success',
      title: '¡Educación modificada!',
      showConfirmButton: false,
      timer: 3000
    })
  }
}