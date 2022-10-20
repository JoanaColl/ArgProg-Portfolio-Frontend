import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';

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
        alert("Skill añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Fallo");
        this.router.navigate(['']);
      })
  }
}