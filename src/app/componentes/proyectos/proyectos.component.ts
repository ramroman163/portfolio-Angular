import { Component, OnInit } from '@angular/core';
import { DataPortafolioService } from 'src/app/servicios/dataPortafolio-service.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  
  constructor(private servicio: DataPortafolioService){}
  
  listProjects : any;

  ngOnInit(): void {
    this.servicio.obtenerData().subscribe(data => {
      this.listProjects = data.achievements;
    })
  }

  eliminarProyecto(proyecto : HTMLDivElement){
    proyecto.remove();
  };

  editarInputs(inputs : Array<HTMLInputElement>, project : any){
    inputs.forEach((input) => {
      !input.hidden ? input.hidden = true : input.hidden = false;
      
      if(input.name == "editNombre"){
        project.name = input.value;
      }

      if(input.name == "editDescripcion"){
        project.description = input.value;
      }

      if(input.name == "editLink"){
        project.link = input.value;
      }

    })
  }

  ocultarInput(input : HTMLInputElement){
    input.hidden = true;
  }
}
