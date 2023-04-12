import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { SHabilidadService } from 'src/app/service/s-habilidad.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent {
  nombreHab : string = "";
  porcentajeHab : number;

  constructor(private sHabilidad : SHabilidadService, private router : Router){

  }

  onCreate(): void{
    const habilidad = new Habilidad(this.nombreHab, this.porcentajeHab);

    this.sHabilidad.save(habilidad).subscribe(data => {
      alert("Habilidad añadida!");
      this.router.navigate(['/portfolio']);
    }, err => {
      alert("Fallo en la operación");
      this.router.navigate(['/portfolio']);
    });
  }
}
