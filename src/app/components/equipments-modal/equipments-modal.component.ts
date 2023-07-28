import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-equipments-modal',
  templateUrl: './equipments-modal.component.html',
  styleUrls: ['./equipments-modal.component.css'],
})
export class EquipmentsModalComponent {
  @Input() equipment: string;
  isVisible = false;

  constructor() {
    this.equipment = '';
  }

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
