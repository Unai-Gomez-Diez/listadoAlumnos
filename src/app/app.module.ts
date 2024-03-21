import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BotonComponent } from './boton/boton.component';
import { AlertaComponent } from './alerta/alerta.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    UsuariosComponent,
    BotonComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
