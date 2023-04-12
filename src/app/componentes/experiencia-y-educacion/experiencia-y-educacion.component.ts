import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia-y-educacion',
  templateUrl: './experiencia-y-educacion.component.html',
  styleUrls: ['./experiencia-y-educacion.component.css']
})
export class ExperienciaYEducacionComponent implements OnInit {
  experiencia : Experiencia[] = [];
  educacion : Educacion[] = [];

  constructor(private sExperiencia : SExperienciaService, private tokenService : TokenService, private sEducacion : SEducacionService){}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    this.cargarEducacion();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarExperiencia() : void{
    this.sExperiencia.lista().subscribe(
      data => {this.experiencia = data}
    )
  }

  cargarEducacion() : void{
    this.sEducacion.lista().subscribe(
      data => {this.educacion = data}
    )
  }

  onDelete(id? : number) : void{
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(data =>{
        this.cargarExperiencia();
      }, err =>{
        alert("No se pudo eliminar la experiencia");
      })
    }
  }

  onDeleteEdu(id? : number) : void{
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(data =>{
        this.cargarEducacion();
      }, err =>{
        alert("No se pudo eliminar la educacion");
      })
    }
  }
}
