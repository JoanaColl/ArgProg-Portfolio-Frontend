import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BannerComponent } from './component/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { interceptorProvider } from './service/interceptor.service';
import { AcercaComponent } from './component/acerca/acerca.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { EducacionComponent } from './component/educacion/educacion.component';
import { SkillComponent } from './component/skill/skill.component';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import { LoginComponent } from './component/login/login.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcercaEditComponent } from './component/acerca/acerca-edit.component';
import { ExperienciaNewComponent } from './component/experiencia/experiencia-new.component';
import { ExperienciaEditComponent } from './component/experiencia/experiencia-edit.component';
import { EducacionNewComponent } from './component/educacion/educacion-new.component';
import { EducacionEditComponent } from './component/educacion/educacion-edit.component';
import { SkillNewComponent } from './component/skill/skill-new.component';
import { SkillEditComponent } from './component/skill/skill-edit.component';
import { ProyectoNewComponent } from './component/proyecto/proyecto-new.component';
import { ProyectoEditComponent } from './component/proyecto/proyecto-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    AcercaComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillComponent,
    ProyectoComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    AcercaEditComponent,
    ExperienciaNewComponent,
    ExperienciaEditComponent,
    EducacionNewComponent,
    EducacionEditComponent,
    SkillNewComponent,
    SkillEditComponent,
    ProyectoNewComponent,
    ProyectoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
