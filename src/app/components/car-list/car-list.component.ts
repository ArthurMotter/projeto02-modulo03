import { Component, Input } from '@angular/core';
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
}
