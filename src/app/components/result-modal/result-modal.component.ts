import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Colonie } from 'src/app/interfaces/colonie';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-result-modal',
  templateUrl: './result-modal.component.html',
  styleUrls: ['./result-modal.component.css'],
})
export class ResultModalComponent {
  @Input() attack: string;
  @Input() colony!: Colonie;
  isVisible = false;

  constructor(public router: Router, private audioService: AudioService) {
    this.attack = '';
  }

  openModal(colonyId: number) {
    this.isVisible = true;
    if (this.attack === 'Win') {
      this.audioService.playWinSound();
    } else if (this.attack === 'Lost') {
      this.audioService.playLostSound();
    }

    setTimeout(() => {
      this.closeModal(colonyId);
    }, 4000);
  }

  closeModal(colonyId: number) {
    this.isVisible = false;

    if (this.attack === 'Win') {
      this.router.navigate(['/colonie/' + colonyId])
    } else {
      this.router.navigate(['/main'])
    }

  }
}
