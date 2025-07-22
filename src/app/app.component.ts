import { Component } from '@angular/core';
import { CarFormComponent } from './components/car-form/car-form.component';

@Component({
  selector: 'app-root',
  imports: [CarFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car-systems-app';
}
