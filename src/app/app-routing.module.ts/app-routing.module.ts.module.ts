import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from '../componentes/portfolio/portfolio.component';
import { LoginComponent } from '../componentes/login/login.component';
import { NewExperienciaComponent } from '../componentes/experiencia-y-educacion/new-experiencia.component';
import { EditExperienciaComponent } from '../componentes/experiencia-y-educacion/edit-experiencia.component';
import { NewEducacionComponent } from '../componentes/experiencia-y-educacion/new-educacion.component';
import { EditEducacionComponent } from '../componentes/experiencia-y-educacion/edit-educacion.component';
import { NewProyectoComponent } from '../componentes/proyectos/new-proyecto.component';
import { EditProyectoComponent } from '../componentes/proyectos/edit-proyecto.component';
import { EditHabilidadComponent } from '../componentes/aptitudes/edit-habilidad.component';
import { NewHabilidadComponent } from '../componentes/aptitudes/new-habilidad.component';
import { EditInicioComponent } from '../componentes/inicio/edit-inicio.component';

const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'auth/iniciar-sesion', component: LoginComponent},
  {path: '', redirectTo: 'portfolio', pathMatch:'full'},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'nuevoproyecto', component: NewProyectoComponent},
  {path: 'editproyecto/:id', component: EditProyectoComponent},
  {path: 'edithab/:id', component: EditHabilidadComponent},
  {path: 'nuevahab', component: NewHabilidadComponent},
  {path: 'editpersona/:id', component: EditInicioComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModuleTsModule { }
