import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas-formativas',
  templateUrl: './tarjetas-formativas.component.html',
  styleUrls: ['./tarjetas-formativas.component.css']
})
export class TarjetasFormativasComponent implements OnInit {

  @Input()
  tarjeta = {
    icono: '',
    categoria: '',
    descripcion: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
