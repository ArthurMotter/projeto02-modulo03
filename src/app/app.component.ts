import { Component } from '@angular/core';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarListComponent } from './components/car-list/car-list.component';

@Component({
  selector: 'app-root',
  imports: [CarFormComponent, CarListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car-systems-app';
}
