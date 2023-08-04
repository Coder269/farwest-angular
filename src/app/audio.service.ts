import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audioPlayer!: HTMLAudioElement;
  private buttonClickSound!: HTMLAudioElement;

  constructor() {
    this.audioPlayer = new Audio();
    this.audioPlayer.src = 'assets/track2.mp3';
    this.audioPlayer.loop = true;
    this.audioPlayer.volume = 0.5; // volume (de 0 à 1)
    this.buttonClickSound = new Audio();
    this.buttonClickSound.src = 'assets/balle2.mp3';
  }

  play() {
    this.audioPlayer.play();
  }

  setVolume(volume: number) {
    this.audioPlayer.volume = volume;
  }

  playButtonClickSound() {
    this.buttonClickSound.play();
  }
}
