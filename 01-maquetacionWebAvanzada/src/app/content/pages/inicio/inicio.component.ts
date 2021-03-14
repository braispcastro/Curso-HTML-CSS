import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tarjetas = [
    {
      icono: 'H',
      categoria: 'Desarrollo Web',
      descripcion: 'Aprende los principales lenguajes para desarrollar webs y conviértete en un webmaster'
    },
    {
      icono: '_',
      categoria: 'Sistemas Operativos',
      descripcion: 'Aprende a administrar sistemas Linux y Windows'
    },
    {
      icono: 'S',
      categoria: 'Hardware',
      descripcion: 'Conoce los entresijos del harware'
    },
    {
      icono: 'u',
      categoria: 'Redes e Internet',
      descripcion: 'Aprende a configurar y administrar redes informáticas y servidores'
    },
    {
      icono: 'a',
      categoria: 'Bases de Datos',
      descripcion: 'Aprende a montar y administrar bases de datos'
    }
  ];

  articulos = [
    {
      fecha: '12 dic',
      categoria: 'Pruebas',
      titulo: 'Título de prueba'
    },
    {
      fecha: '13 dic',
      categoria: 'Pruebas',
      titulo: 'Título de prueba'
    },
    {
      fecha: '14 dic',
      categoria: 'Pruebas',
      titulo: 'Título de prueba'
    },
    {
      fecha: '15 dic',
      categoria: 'Pruebas',
      titulo: 'Título de prueba'
    },
    {
      fecha: '16 dic',
      categoria: 'Pruebas',
      titulo: 'Título de prueba'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
