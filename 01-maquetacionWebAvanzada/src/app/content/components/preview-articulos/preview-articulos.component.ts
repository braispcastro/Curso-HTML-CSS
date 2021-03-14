import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-articulos',
  templateUrl: './preview-articulos.component.html',
  styleUrls: ['./preview-articulos.component.css']
})
export class PreviewArticulosComponent implements OnInit {

  @Input()
  articulo = {
    fecha: '',
    categoria: '',
    titulo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
