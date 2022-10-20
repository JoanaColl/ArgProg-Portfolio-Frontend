import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

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
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el proyecto");
        this.router.navigate(['']);
      }
    )
  }
}