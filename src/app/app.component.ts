import { Component } from '@angular/core';
import { CarFormComponent } from './components/car-form/car-form.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { Car } from './models/car.model';

@Component({
  selector: 'app-root',
  imports: [CarFormComponent, CarListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car-systems-app';

  // Master list of cars
  cars: Car[] = [
    { name: 'Palio', assembler: 'Fiat', price: 30000, year: 2020 }
  ];

  // Method to handle the event emitted by the form
  onCarAdded(car: Car) {
    this.cars.push(car);
  }

  // Method to handle the deletion emitted by the table
  onCarDeleted(index: number) {
    this.cars.splice(index, 1);
  }
}
