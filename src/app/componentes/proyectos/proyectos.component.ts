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

  editarInput(inputs : Array<HTMLInputElement>, index : number){

    inputs.forEach((input) => {
      !input.hidden ? input.hidden = true : input.hidden = false;
      
      if(input.name == "editarNombre"){
        this.listProjects[index].name = input.value;
      }

      if(input.name == "editarDescripcion"){
        this.listProjects[index].progress = input.value;
      }

      if(input.name == "editarLink"){
        this.listProjects[index].description = input.value;
      }
    })
  }

  ocultarInput(input : HTMLInputElement){
    input.hidden = true;
  };

  eliminarProyecto(i : number){
    this.listProjects.splice(i, 1);
  };

  sumarProyecto(){
    if(this.listProjects.length < 5){
      this.listProjects.push({"name": "lol", "description": "om", "link": "#"});
    }
    else{
      alert("Se excedió el límite de Aptitudes");
    }
  }
}
