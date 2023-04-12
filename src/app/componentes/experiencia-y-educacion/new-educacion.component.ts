import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit{
  institucionEdu : string = "";
  tituloEdu : string = "";
  carreraEdu : string = "";
  inicioEdu : string = "";
  finEdu : string = "";
  linkImg : string = "";

  constructor(private sEducacion : SEducacionService, private router : Router){
  
  }

  ngOnInit(): void {
  
  }

  onCreate(){
    const edu = new Educacion(this.institucionEdu, this.tituloEdu, this.carreraEdu, this.inicioEdu, this.finEdu, this.linkImg);

    this.sEducacion.save(edu).subscribe(data => {
      alert("Educacion añadida!");
      this.router.navigate(['/portfolio']);
    }, err => {
      alert("Fallo en la operación");
      this.router.navigate(['/portfolio']);
    });
  }
}
