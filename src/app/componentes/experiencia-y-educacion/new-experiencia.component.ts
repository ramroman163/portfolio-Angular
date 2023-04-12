import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit{
  puestoExp: string = "";
  lugarExp: string = "";
  inicioExp: string = "";
  finExp: string = "";
  linkImg: string = "";

  constructor(private sExperiencia : SExperienciaService, private router : Router){

  }

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const exp = new Experiencia(this.puestoExp, this.lugarExp, this.inicioExp, this.finExp, this.linkImg);

    this.sExperiencia.save(exp).subscribe(data => {
      alert("Experiencia añadida!");
      this.router.navigate(['/portfolio']);
    }, err => {
      alert("Fallo en la operación");
      this.router.navigate(['/portfolio']);
    });
  }
}
