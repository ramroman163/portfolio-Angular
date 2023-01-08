import { Component, OnInit } from '@angular/core';
import { DataPortafolioService } from 'src/app/servicios/dataPortafolio-service.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  constructor(private servicio: DataPortafolioService){}

  dataPortafolio : any;

  ngOnInit(): void {
    this.servicio.obtenerData().subscribe(data => {
      this.dataPortafolio = data;
    })
  }

  editarPerfil(inputPerfil : HTMLInputElement) : void{
    inputPerfil.hidden = false;
    this.dataPortafolio.image = inputPerfil.value;
  }

  editarPosition(inputPosition : HTMLInputElement) : void {
    inputPosition.hidden = false;
    this.dataPortafolio.position = inputPosition.value;
  }

  editarUbication(inputUbication : HTMLInputElement) : void {
    inputUbication.hidden = false;
    this.dataPortafolio.ubication = inputUbication.value;
  }

  ocultarInput(input : HTMLInputElement){
    input.hidden = true;
  };


}
