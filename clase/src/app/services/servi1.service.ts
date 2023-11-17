import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Servi1Service {

  obtenerHora(){
    let horaActual = new Date().getHours();
    return horaActual
  }

  constructor(private http:HttpClient) { }
}
