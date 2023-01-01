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
}
