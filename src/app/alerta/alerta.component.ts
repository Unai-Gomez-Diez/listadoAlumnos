import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrl: './alerta.component.css'
})
export class AlertaComponent {
  @Input() tipo: string = 'success';
  @Input() mensaje: string = '';

  constructor() {}
}
