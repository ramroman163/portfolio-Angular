import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  proyecto : Proyecto[] = [];

  constructor(private sProyecto : SProyectoService, private tokenService : TokenService ){}

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

  cargarProyecto() : void{
    this.sProyecto.lista().subscribe(
      data => {this.proyecto = data}
    )
  }

  onDelete(id? : number) : void{
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(data =>{
        this.cargarProyecto();
      }, err =>{
        alert("No se pudo eliminar el proyecto");
      })
    }
  }
}
