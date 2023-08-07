import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.css'],
})
export class ResultModalComponent {
  @Input() attack: string;
  isVisible = false;

  constructor(public router: Router, private audioService: AudioService) {
    this.attack = '';
  }

  openModal() {
    this.isVisible = true;
    if (this.attack === 'Win') {
      this.audioService.playWinSound();
    } else if (this.attack === 'Lost') {
      this.audioService.playLostSound();
    }

    setTimeout(() => {
      this.closeModal();
    }, 4000);
  }

  closeModal() {
    this.isVisible = false;
  }
}
