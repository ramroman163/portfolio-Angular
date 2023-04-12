import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ExperienciaYEducacionComponent } from './componentes/experiencia-y-educacion/experiencia-y-educacion.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { AppRoutingModuleTsModule } from './app-routing.module.ts/app-routing.module.ts.module';
import { CommonModule } from '@angular/common';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia-y-educacion/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia-y-educacion/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/experiencia-y-educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/experiencia-y-educacion/edit-educacion.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto.component';
import { NewHabilidadComponent } from './componentes/aptitudes/new-habilidad.component';
import { EditHabilidadComponent } from './componentes/aptitudes/edit-habilidad.component';
import { EditInicioComponent } from './componentes/inicio/edit-inicio.component';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    InicioComponent,
    ExperienciaYEducacionComponent,
    AptitudesComponent,
    ProyectosComponent,
    LoginComponent,
    PortfolioComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    NewHabilidadComponent,
    EditHabilidadComponent,
    EditInicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModuleTsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
