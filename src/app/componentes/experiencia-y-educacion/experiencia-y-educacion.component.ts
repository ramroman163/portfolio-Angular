import { Component, OnInit } from '@angular/core';
import { DataPortafolioService } from 'src/app/servicios/dataPortafolio-service.service';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {

  constructor(private servicio:DataPortafolioService){}

  listEducation : any;
  listExperiences : any;

  ngOnInit(): void {
    this.servicio.obtenerData().subscribe(data => {
      this.listEducation = data.education;
      this.listExperiences = data.experiences;
    });
  }

  ocultarInput(input : HTMLInputElement){
    input.hidden = true;
  }

  editarEducacion(educaciones : Array<HTMLInputElement>, item : any){
    educaciones.forEach((educacion) => {
      !educacion.hidden ? educacion.hidden = true : educacion.hidden = false;

      if(educacion.name == "editSchool"){
        item.school = educacion.value;
      }

      if(educacion.name == "editTitle"){
        item.title = educacion.value;
      }

      if(educacion.name == "editCareer"){
        item.career = educacion.value;
      }

      if(educacion.name == "editStartEducation"){
        item.start = educacion.value;
      }

      if(educacion.name == "editEndEducation"){
        item.end = educacion.value;
      }

      if(educacion.name == "editImg"){
        item.img = educacion.value;
      }
    })
  }
}
