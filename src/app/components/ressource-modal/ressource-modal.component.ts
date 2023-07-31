import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ressource-modal',
  templateUrl: './ressource-modal.component.html',
  styleUrls: ['./ressource-modal.component.css'],
})
export class RessourceModalComponent {
  @Input() resource: string;
  isVisible = false;

  constructor() {
    this.resource = '';
  }

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
