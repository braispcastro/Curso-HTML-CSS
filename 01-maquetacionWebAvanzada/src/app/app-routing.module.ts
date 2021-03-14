import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { BlogComponent } from './content/pages/blog/blog.component';
import { InicioComponent } from './content/pages/inicio/inicio.component';
import { FormacionComponent } from './content/pages/formacion/formacion.component';
import { ContactoComponent } from './content/pages/contacto/contacto.component';



const routes: Routes = [
  {
      path: '',
      component: InicioComponent,
      pathMatch: 'full'
  },
  {
      path: 'blog',
      component: BlogComponent
  },
  {
      path: 'formacion',
      component: FormacionComponent
  },
  {
      path: 'contacto',
      component: ContactoComponent
  },
  {
      path: '**',
      redirectTo: ''
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
