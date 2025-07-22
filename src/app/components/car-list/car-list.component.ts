import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../../models/car.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-list',
  imports: [CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {
  // Receive the objects array from parent (appComponent)
  @Input() cars: Car[] = [];

  // Emmit the car to be deleted by Id
  @Output() carDeleted = new EventEmitter<number>();

  // Car deletion method
  deleteCar(index: number) {
    this.carDeleted.emit(index);
  }
}
