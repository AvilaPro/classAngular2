import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PeliculasService } from "../../services/peliculas.service";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent {
  users: any;
  nroPagina = 1;
  arrayPelis:any = [];
  urlImgs = 'http://image.tmdb.org/t/p';

  constructor(private http: HttpClient, private peliculas: PeliculasService) { }

  pedirPelis(){
    this.peliculas.pedirPeliculas(this.nroPagina).subscribe(e => {
      this.arrayPelis.push(...e.results);
      console.log(this.arrayPelis);
    })
    console.log(`Numero de pagina: ${this.nroPagina}`);
    this.nroPagina++;
  }

  pedirUsuarios() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }

  postUsers() {
    this.http.post('https://jsonplaceholder.typicode.com/users',
      {
        name: 'John Doe',
        username: 'john_doe',
        email: 'john_doe@example.com',
        address: {
          street: 'John Doe',
          suite: 'John Doe',
          city: 'John Doe',
          zipcode: 'John Doe',
          geo: {
            lat: 'John Doe',
            lng: 'John Doe'
          }
        },
        phone: 'John Doe',
        website: 'John Doe',
        company: {
          name: 'John Doe',
          catchPhrase: 'John Doe',
          bs: 'John Doe'
        }
      }).subscribe(data => {
        console.log(data);
      })
  }

  putUser(){
    this.http.put('https://jsonplaceholder.typicode.com/users/3',{
      username: 'Eduardo'
    }).subscribe(data => {
      console.log(data);
    })
  }

  deleteUser(){
    this.http.delete('https://jsonplaceholder.typicode.com/users/1').subscribe(() => {
      console.log('Usuario eliminado');
    })
  }
}


