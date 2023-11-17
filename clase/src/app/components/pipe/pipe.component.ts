import { Component } from '@angular/core';
import { Servi1Service } from "../../services/servi1.service";

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {

  constructor(private servi1: Servi1Service){}
  horaActual = this.servi1.obtenerHora();
  saldo: number = 8500.51416919191919;
  fecha:any = new Date(1988, 1, 21);
}
