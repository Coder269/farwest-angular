import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.css'],
})
export class ResultModalComponent {
  @Input() attack: string;
  isVisible = false;

  constructor(public router: Router) {
    this.attack = '';
  }

  openModal() {
    this.isVisible = true;
    setTimeout(() => {
      this.closeModal();
    }, 4000);
  }

  closeModal() {
    this.isVisible = false;
  }
}
