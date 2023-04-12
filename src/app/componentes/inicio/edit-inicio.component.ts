import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-inicio',
  templateUrl: './edit-inicio.component.html',
  styleUrls: ['./edit-inicio.component.css']
})
export class EditInicioComponent {
  persona : Persona = null;

  constructor(private sPersona : PersonaService, private activatedRouter : ActivatedRoute, private router : Router){

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(data => {
      this.persona = data;
    }, err =>{
      alert("Error al modificar persona");
      this.router.navigate(['portfolio']);
    })
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.sPersona.update(id, this.persona).subscribe(data => {
      this.router.navigate(['portfolio']);
    }, err =>{
      alert("Error al modificar persona");
      this.router.navigate(['portfolio']);
    })
  }
}
