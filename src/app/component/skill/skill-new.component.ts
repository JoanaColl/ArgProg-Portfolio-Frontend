import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-skill-new',
  templateUrl: './skill-new.component.html',
  styleUrls: ['./skill-new.component.css']
})
export class SkillNewComponent implements OnInit {
  nombreSk: string = "";
  porcentaje: number = null;
  
  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Skill(this.nombreSk, this.porcentaje);
    this.skillService.save(skill).subscribe(
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
      html: 'No pudo añadirse la <b>skill</b>',
      showConfirmButton: false,
      timer: 3000
    })
  }

  showSuccess(){
    Swal.fire({
      icon: 'success',
      title: '¡Skill añadida!',
      showConfirmButton: false,
      timer: 3000
    })
  }
}