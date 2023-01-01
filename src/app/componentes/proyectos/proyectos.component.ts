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
}
