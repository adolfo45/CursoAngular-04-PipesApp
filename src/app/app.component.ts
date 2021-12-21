import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'AdolFo sanchez';
  numero: number = 1000;
  obj = {
    nombre: 'ADOLFO SANCHEZ'
  };
}
