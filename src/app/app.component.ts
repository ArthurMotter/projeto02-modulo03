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

  carToEdit: Car | null = null;
  carToEditIndex: number | null = null;

  // Method to handle both create and update
  onCarSaved(car: Car) {
    if (this.carToEditIndex !== null) {
      this.cars[this.carToEditIndex] = car;
    } else {
      this.cars.push(car);
    }
    this.carToEdit = null;
    this.carToEditIndex = null;
  }

  // Method to handle the edition emitted from parents
  onCarEdit(index: number) {
    this.carToEditIndex = index;
    this.carToEdit = { ...this.cars[index] };
  }

  // Method to handle the deletion emitted by the table
  onCarDeleted(index: number) {
    this.cars.splice(index, 1);
  }
}
