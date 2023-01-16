import { Component, OnInit} from '@angular/core';
import { ActivarloginService } from 'src/app/servicios/activarlogin.service';
import { DataPortafolioService } from 'src/app/servicios/dataPortafolio-service.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit{
  constructor(private servicio : DataPortafolioService, private activarLogin : ActivarloginService){}

  dataPortafolio : any;

  ngOnInit(): void {
    this.servicio.obtenerData().subscribe(data => {
      this.dataPortafolio = data;
    });
  }

  ocultarLoginInput = true;

  mostrarLogin(){
    this.activarLogin.disparadorDeActivarLogin.emit(this.ocultarLoginInput);
    !this.ocultarLoginInput ? this.ocultarLoginInput = true : this.ocultarLoginInput = false;
  }
}
