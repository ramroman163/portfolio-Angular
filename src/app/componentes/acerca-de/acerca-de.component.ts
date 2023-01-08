import { Component, OnInit } from '@angular/core';
import { DataPortafolioService } from 'src/app/servicios/dataPortafolio-service.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{

  constructor(private servicio: DataPortafolioService){}

  dataPortafolio : any;

  ngOnInit(): void {
    this.servicio.obtenerData().subscribe(data => {
      this.dataPortafolio = data;
    })
  }

  mostrarInputAcercaDe : boolean = true;
  valorInput : string = "";

  mostrarInput(){
    this.mostrarInputAcercaDe = false;
  }

  guardarValorInput(event : Event){
    this.mostrarInputAcercaDe = true;
    this.valorInput = (<HTMLInputElement>event.target).value;
    this.dataPortafolio.about = this.valorInput;
  }

}
