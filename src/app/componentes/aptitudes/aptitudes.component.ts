import { Component, OnInit } from '@angular/core';
import { DataPortafolioService } from 'src/app/servicios/dataPortafolio-service.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  constructor(private servicio: DataPortafolioService) { }

  listSkills: any;

  ngOnInit(): void {
    this.servicio.obtenerData().subscribe(data => {
      this.listSkills = data.skills;
    })
  }

  editarInput(inputs: Array<HTMLInputElement>, index: number) {

    inputs.forEach((input) => {
      !input.hidden ? input.hidden = true : input.hidden = false;

      if (input.name == "inputNombre") {
        this.listSkills[index].name = input.value;
      }

      if (input.name == "inputProgreso") {
        this.listSkills[index].progress = input.value;
      }
    })

  }

  ocultarInput(input: HTMLInputElement) {
    input.hidden = true;
  };

  eliminarSkill(i: number) {
    this.listSkills.splice(i, 1);
  };

  sumarSkill() {
    if (this.listSkills.length < 5) {
      this.listSkills.push({ "name": "Titulo", "progress": 0 });
    }
    else {
      alert("Se excedió el límite de Aptitudes");
    }
  }
}
