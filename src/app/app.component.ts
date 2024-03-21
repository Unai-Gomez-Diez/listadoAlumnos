import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'listadoAlumnos';
  usuarios = [
    { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
    { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
    { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' },
  ];
  tituloDAM = "Lista Usuarios DAM"
  tituloDAR = "Lista Usuarios DAR"
  agregarUsuario(texto: string){

  }
}
