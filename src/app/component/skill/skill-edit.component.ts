import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skill-edit',
  templateUrl: './skill-edit.component.html',
  styleUrls: ['./skill-edit.component.css']
})
export class SkillEditComponent implements OnInit {
  skill: Skill = null;
  
  constructor(private skillService: SkillService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.update(id, this.skill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar skill");
        this.router.navigate(['']);
      }
    )
  }
}