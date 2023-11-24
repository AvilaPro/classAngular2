import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface PelisResult{
  page: number,
  results: [],
  total_pages: number,
  total_results: number
}
@Injectable({
  providedIn: 'root'
})


export class PeliculasService {
  baseUrl = 'https://api.themoviedb.org/3/movie/popular?';
  solicitudAuth = 'api_key=';
  apikey = '+d5eb23ab03971c50b6ed148e54b3a717'
  solicitudLenguaje = 'language=es-VE';
  solicitudPagina = 'page=';


  constructor(private http: HttpClient) { }

  pedirPeliculas(nroPagina: number = 1): Observable<PelisResult>{
    return this.http.get<PelisResult>(`${this.baseUrl}${this.solicitudAuth}${this.apikey}&${this.solicitudLenguaje}&${this.solicitudPagina}${nroPagina}`)
  }
}
