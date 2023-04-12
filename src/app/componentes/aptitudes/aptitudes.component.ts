import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { SHabilidadService } from 'src/app/service/s-habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  
  habilidad : Habilidad[] = [];
  
  constructor(private sHabilidad : SHabilidadService, private tokenService : TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

  cargarHabilidad() : void{
    this.sHabilidad.lista().subscribe(
      data => {this.habilidad = data}
    )
  }

  onDelete(id? : number) : void{
    if(id != undefined){
      this.sHabilidad.delete(id).subscribe(data =>{
        this.cargarHabilidad();
      }, err =>{
        alert("No se pudo eliminar la habilidad");
      })
    }
  }
}
