import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivarloginService {

  @Output() disparadorDeActivarLogin: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
