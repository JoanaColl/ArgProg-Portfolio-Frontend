import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-proyecto-new',
  templateUrl: './proyecto-new.component.html',
  styleUrls: ['./proyecto-new.component.css']
})
export class ProyectoNewComponent implements OnInit {
  tituloPr: string = "";
  descripcionPr: string = "";
  imgPr: string = "";
  repositorio: string = "";

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.tituloPr, this.descripcionPr, this.imgPr, this.repositorio);
    this.proyectoService.save(proyecto).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo");
        this.router.navigate(['']);
      })
  }
}