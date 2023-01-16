import { Component } from '@angular/core';
import { ActivarloginService } from './servicios/activarlogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private activarLogin : ActivarloginService){}

  title = 'paginaAngular';

  ocultarMain! : boolean;

  ngOnInit() : void{
    this.activarLogin.disparadorDeActivarLogin.subscribe(data => {
      this.ocultarMain = data;
    })
  }
}
