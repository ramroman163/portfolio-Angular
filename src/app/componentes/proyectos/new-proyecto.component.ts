import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {
  nombreProyecto : string = "";
  descProyecto : string = "";
  linkProyecto : string = "";

  constructor(private sProyecto : SProyectoService, private router : Router){

  }

  onCreate(): void{
    const proyec = new Proyecto(this.nombreProyecto, this.descProyecto, this.linkProyecto);

    this.sProyecto.save(proyec).subscribe(data => {
      alert("Proyecto añadido!");
      this.router.navigate(['/portfolio']);
    }, err => {
      alert("Fallo en la operación");
      this.router.navigate(['/portfolio']);
    });
  }
}
