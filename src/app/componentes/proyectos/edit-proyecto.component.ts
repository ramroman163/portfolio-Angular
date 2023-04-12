import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit{
  proyecto : Proyecto = null;

  constructor(private sProyecto : SProyectoService, private activatedRouter : ActivatedRoute, private router : Router){

  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(data => {
      this.proyecto = data;
    }, err =>{
      alert("Error al modificar educacion");
      this.router.navigate(['portfolio']);
    })
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proyecto).subscribe(data => {
      this.router.navigate(['portfolio']);
    }, err =>{
      alert("Error al modificar educacion");
      this.router.navigate(['portfolio']);
    })
  }
}
