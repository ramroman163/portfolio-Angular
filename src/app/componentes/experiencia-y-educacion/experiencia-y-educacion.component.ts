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

  editarExperiencia(inputsExperiencias : Array<HTMLInputElement>, index : number){
    inputsExperiencias.forEach((input) => {
      !input.hidden ? input.hidden = true : input.hidden = false;

      if(input.name == "editImgExperience"){
        this.listExperiences[index].img = input.value;
      }

      if(input.name == "editPosition"){
        this.listExperiences[index].position = input.value;
      }

      if(input.name == "editCompany"){
        this.listExperiences[index].company = input.value;
      }

      if(input.name == "editStartExperience"){
        this.listExperiences[index].start = input.value;
      }

      if(input.name == "editEndExperience"){
        this.listExperiences[index].end = input.value;
      }

    })
  }

  sumarExperiencia(){
    this.listExperiences.push({
      "position": "Posicion",
      "company": "Compania",
      "img": "#",
      "start": "Inicio",
      "end": "Fin"
    })
  }

  eliminarExperiencia(index : number){
    this.listExperiences.splice(index, 1);
  }

  editarEducacion(inputsEducaciones : Array<HTMLInputElement>, index : number){
    inputsEducaciones.forEach((input) => {
      !input.hidden ? input.hidden = true : input.hidden = false;

      if(input.name == "editSchool"){
        this.listEducation[index].school = input.value;
      }

      if(input.name == "editTitle"){
        this.listEducation[index].title = input.value;
      }

      if(input.name == "editCareer"){
        this.listEducation[index].career = input.value;
      }

      if(input.name == "editStartEducation"){
        this.listEducation[index].start = input.value;
      }

      if(input.name == "editEndEducation"){
        this.listEducation[index].end = input.value;
      }

      if(input.name == "editImg"){
        this.listEducation[index].img = input.value;
      }
    })
  }

  sumarEducacion(){
    this.listEducation.push({
      "school": "Escuela",
      "img": "#",
      "title": "Titulo",
      "career": "Carrera",
      "start": "Inicio",
      "end": "Fin"
    })
  }

  eliminarEducacion(index : number){
    this.listEducation.splice(index, 1);
  }
}
