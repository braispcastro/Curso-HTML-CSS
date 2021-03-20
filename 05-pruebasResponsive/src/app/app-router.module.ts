import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AstrofotografiaComponent } from './content/pages/astrofotografia/astrofotografia.component';
import { ContactoComponent } from './content/pages/contacto/contacto.component';
import { InicioComponent } from './content/pages/inicio/inicio.component';
import { ProyectosComponent } from './content/pages/proyectos/proyectos.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
    pathMatch: 'full'
  },
  {
    path: 'proyectos',
    component: ProyectosComponent,
  },
  {
    path: 'astrofotografia',
    component: AstrofotografiaComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
