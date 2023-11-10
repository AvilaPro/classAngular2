import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent {
  @Input() infoDesdePadre: string = '';
  @Output() infoDesdeHijo = new EventEmitter<string>();

  otraInfoDesdeHijo: string = '';

  mostrarinfo(){
    console.log(this.infoDesdePadre);
  }

  enviarInfoDesdeHijo(){
    this.otraInfoDesdeHijo = this.infoDesdePadre;
    this.infoDesdeHijo.emit(this.otraInfoDesdeHijo);
    console.log(this.otraInfoDesdeHijo);
  }

  constructor() {}
}
