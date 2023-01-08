import { Component, OnInit } from '@angular/core';
import { DataPortafolioService } from 'src/app/servicios/dataPortafolio-service.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit{
  constructor(private servicio : DataPortafolioService){}

  listSkills : any;

  ngOnInit(): void {
    this.servicio.obtenerData().subscribe(data => {
      this.listSkills = data.skills;
    })
  }
  
  mostrarInput(input : HTMLInputElement, barraProgreso : HTMLDivElement){
    !input.hidden ? input.hidden = true : input.hidden = false;
    this.listSkills.progress = input.value;
  }

  ocultarInput(input : HTMLInputElement){
    input.hidden = true;
  };

  eliminarSkill(skill : HTMLDivElement){
    skill.remove();
  };
}
