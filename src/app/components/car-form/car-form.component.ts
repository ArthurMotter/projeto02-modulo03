import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Car } from '../../models/car.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent {
  // Receive the object by Id from parent
  @Input() carToEdit: Car | null = null;

  // Event emitter that will output the object
  @Output() carAdded = new EventEmitter<Car>();

  // Object to send and manipulate
  carModel: Car = { name: '', assembler: '', price: null, year: null };
  isEditMode = false;
  
  // Methods
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['carToEdit'] && this.carToEdit) {
      this.carModel = { ...this.carToEdit }; 
      this.isEditMode = true;
    }
  }

  saveCar() {
    if (!this.carModel.name || !this.carModel.assembler || !this.carModel.price || !this.carModel.year) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    this.carAdded.emit(this.carModel);
    this.resetForm();
  }

  // Handlers
  resetForm() {
    this.carModel = { name: '', assembler: '', price: null, year: null };
    this.isEditMode = false;
  }
}
