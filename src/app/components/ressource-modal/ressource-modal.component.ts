import { Component, Inject, Input } from '@angular/core';
import { Ressources } from 'src/app/interfaces/ressources';

@Component({
  selector: 'app-ressource-modal',
  templateUrl: './ressource-modal.component.html',
  styleUrls: ['./ressource-modal.component.css'],
})
export class RessourceModalComponent {
  @Input() resource?: Ressources;
  isVisible = false;
  type?: string;

  constructor() {
  }

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
