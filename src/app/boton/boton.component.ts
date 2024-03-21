import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  @Input() label: string = '';
  @Output() click = new EventEmitter();

  constructor() {}

  onClick(): void {
    this.click.emit();
  }
}
