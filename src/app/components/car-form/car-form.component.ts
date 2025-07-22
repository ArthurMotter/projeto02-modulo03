import { Component, EventEmitter, Output } from '@angular/core';
import { Car } from '../../models/car.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  imports: [FormsModule],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent {
  // Event emitter that will output the object
  @Output() carAdded = new EventEmitter<Car>();

  // Object to send
  newCar: Car = {
    name: '',
    assembler: '',
    price: null,
    year: null
  };

  // Method to save the object
  saveCar() {
    if (!this.newCar.name || !this.newCar.assembler || !this.newCar.price || !this.newCar.year) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    this.carAdded.emit(this.newCar);

    this.newCar = { name: '', assembler: '', price: null, year: null };
  }
}
