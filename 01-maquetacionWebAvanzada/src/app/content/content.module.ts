import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BlogComponent } from './pages/blog/blog.component';
import { FormacionComponent } from './pages/formacion/formacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TarjetasFormativasComponent } from './components/tarjetas-formativas/tarjetas-formativas.component';
import { PreviewArticulosComponent } from './components/preview-articulos/preview-articulos.component';



@NgModule({
  declarations: [
    InicioComponent,
    BlogComponent,
    FormacionComponent,
    ContactoComponent,
    TarjetasFormativasComponent,
    PreviewArticulosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InicioComponent,
    BlogComponent,
    FormacionComponent,
    ContactoComponent
  ]
})
export class ContentModule { }
