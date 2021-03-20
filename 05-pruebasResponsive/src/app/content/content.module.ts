import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { AstrofotografiaComponent } from './pages/astrofotografia/astrofotografia.component';
import { ContactoComponent } from './pages/contacto/contacto.component';



@NgModule({
  declarations: [
    InicioComponent,
    ProyectosComponent,
    AstrofotografiaComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
