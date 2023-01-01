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
}
