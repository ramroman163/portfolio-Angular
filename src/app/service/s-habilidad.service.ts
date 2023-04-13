import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class SHabilidadService {

  expURL = 'https://yoprogramo-springboot-51j8.onrender.com/habilidad/';

  constructor(private httpClient : HttpClient) { }

  public lista () : Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.expURL + 'lista');
  }

  public detail(id : number) : Observable<Habilidad>{
    return this.httpClient.get<Habilidad>(this.expURL + `detail/${id}`);
  }

  public save(habilidad : Habilidad) : Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', habilidad);
  }

  public update(id : number, habilidad : Habilidad) : Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, habilidad);
  }

  public delete(id : number) : Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }

}
