import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaEditComponent } from './component/acerca/acerca-edit.component';
import { ExperienciaNewComponent } from './component/experiencia/experiencia-new.component';
import { ExperienciaEditComponent } from './component/experiencia/experiencia-edit.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { EducacionNewComponent } from './component/educacion/educacion-new.component';
import { EducacionEditComponent } from './component/educacion/educacion-edit.component';
import { SkillNewComponent } from './component/skill/skill-new.component';
import { SkillEditComponent } from './component/skill/skill-edit.component';
import { ProyectoNewComponent } from './component/proyecto/proyecto-new.component';
import { ProyectoEditComponent } from './component/proyecto/proyecto-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'acerca-edit/:id', component: AcercaEditComponent},
  { path: 'experiencia-new', component: ExperienciaNewComponent},
  { path: 'experiencia-edit/:id', component: ExperienciaEditComponent},
  { path: 'educacion-new', component: EducacionNewComponent},
  { path: 'educacion-edit/:id', component: EducacionEditComponent},
  { path: 'skill-new', component: SkillNewComponent},
  { path: 'skill-edit/:id', component: SkillEditComponent},
  { path: 'proyecto-new', component: ProyectoNewComponent},
  { path: 'proyecto-edit/:id', component: ProyectoEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
