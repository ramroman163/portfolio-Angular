import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  persona? : Persona = null;

  constructor(private sPersona : PersonaService, private tokenService : TokenService){}

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

  cargarPersona() : void{
    this.sPersona.detail(1).subscribe(
      data => {this.persona = data}
    )
  } 

}
