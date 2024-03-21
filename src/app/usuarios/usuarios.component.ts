import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  @Input() title: string = 'Ejemplo de Tabla';
  @Input() tableData: any[] = [];

  constructor() { }

  ngOnInit(): void {

    this.loadTableData();
  }

  loadTableData() {

    this.tableData = [
      { id: 1, name: 'Usuario 1', email: 'usuario1@example.com' },
      { id: 2, name: 'Usuario 2', email: 'usuario2@example.com' },
      { id: 3, name: 'Usuario 3', email: 'usuario3@example.com' },
      // Puedes agregar más datos aquí según sea necesario
    ];
  }
}
