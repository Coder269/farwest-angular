import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audioPlayer!: HTMLAudioElement;
  private loginSound!: HTMLAudioElement;
  private attackSound!: HTMLAudioElement;
  private logoutSound!: HTMLAudioElement;

  constructor() {
    this.audioPlayer = new Audio();
    this.audioPlayer.src = 'assets/track2.mp3';
    this.audioPlayer.loop = true;
    this.audioPlayer.volume = 0.5; // volume (de 0 à 1)
    this.loginSound = new Audio();
    this.loginSound.src = 'assets/balle2.mp3';
    this.attackSound = new Audio();
    this.attackSound.src = 'assets/cavalerie2.mp3';
    this.audioPlayer.loop = true;
    this.audioPlayer.volume = 0.5;
    this.logoutSound = new Audio();
    this.logoutSound.src = 'assets/ricochet.mp3';
  }

  play() {
    this.audioPlayer.play();
  }

  stop() {
    this.audioPlayer.pause();
    this.audioPlayer.currentTime = 0;
  }

  setVolume(volume: number) {
    this.audioPlayer.volume = volume;
  }

  playLoginSound() {
    this.loginSound.play();
  }

  playAttackSound() {
    this.attackSound.play();
  }

  stopAttackSound() {
    this.attackSound.pause();
    this.attackSound.currentTime = 0;
  }

  playLogoutSound() {
    this.logoutSound.play();
  }
}
