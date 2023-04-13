import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://yoprogramo-springboot-51j8.onrender.com/personas/';

  constructor(private httpClient: HttpClient) { }

  public lista () : Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL + 'lista');
  }

  public detail(id : number) : Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL + `detail/${id}`);
  }

  // public save(educacion : Educacion) : Observable<any>{
  //   return this.httpClient.post<any>(this.expURL + 'create', educacion);
  // }

  public update(id : number, persona : Persona) : Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
  }

  // public delete(id : number) : Observable<any>{
  //   return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  // }
}
