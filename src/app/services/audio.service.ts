import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audioPlayer!: HTMLAudioElement;
  private loginSound!: HTMLAudioElement;
  private attackSound!: HTMLAudioElement;
  private logoutSound!: HTMLAudioElement;
  private winSound!: HTMLAudioElement;
  private lostSound!: HTMLAudioElement;
  private woodSound!: HTMLAudioElement;
  private ironSound!: HTMLAudioElement;
  private goldSound!: HTMLAudioElement;
  private moneySound!: HTMLAudioElement;
  private cowboySound!: HTMLAudioElement;

  private winSoundPlayed = false;
  private lostSoundPlayed = false;
  private soundDuration: number = 5000;

  constructor() {
    //GENERAL MUSIC
    this.audioPlayer = new Audio();
    this.audioPlayer.src = 'assets/track2.mp3';
    this.audioPlayer.loop = true;
    this.audioPlayer.volume = 0.5; // volume (de 0 à 1)
    //LOGIN SOUND
    this.loginSound = new Audio();
    this.loginSound.src = 'assets/balle2.mp3';
    //ATTACK MUSIC
    this.attackSound = new Audio();
    this.attackSound.src = 'assets/cavalerie2.mp3';
    this.attackSound.loop = true;
    this.attackSound.volume = 0.5;
    //LOGOUT SOUND
    this.logoutSound = new Audio();
    this.logoutSound.src = 'assets/ricochet.mp3';
    //WIN SOUND
    this.winSound = new Audio();
    this.winSound.src = 'assets/win2.mp3';
    //LOST SOUND
    this.lostSound = new Audio();
    this.lostSound.src = 'assets/lost.mp3';
    //WOOD EQUIPMENT MODAL SOUND
    this.woodSound = new Audio();
    this.woodSound.src = 'assets/wood.mp3';
    this.woodSound.volume = 0.5;
    //IRON EQUIPMENT MODAL SOUND
    this.ironSound = new Audio();
    this.ironSound.src = 'assets/iron.mp3';
    this.ironSound.volume = 0.5;
    //GOLD EQUIPMENT MODAL SOUND
    this.goldSound = new Audio();
    this.goldSound.src = 'assets/gold.mp3';
    this.goldSound.volume = 0.5;
    //MONEY FOR RESSOURCES MODALS
    this.moneySound = new Audio();
    this.moneySound.src = 'assets/money.mp3';
    this.moneySound.volume = 0.5;
    //COWBOY SOUND
    this.cowboySound = new Audio();
    this.cowboySound.src = 'assets/cowboy.mp3';
    this.cowboySound.volume = 0.5;
  }

  //GENERAL MUSIC
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

  //LOGIN SOUND
  playLoginSound() {
    this.loginSound.play();
  }

  //ATTACK MUSIC
  playAttackSound() {
    this.attackSound.play();
  }

  stopAttackSound() {
    this.attackSound.pause();
    this.attackSound.currentTime = 0;
  }

  //LOGOUT SOUND
  playLogoutSound() {
    this.logoutSound.play();
  }

  //WIN SOUND
  playWinSound() {
    if (!this.winSoundPlayed) {
      this.winSound.play();
      this.winSoundPlayed = true;
    }
  }

  //LOST SOUND
  playLostSound() {
    if (!this.lostSoundPlayed) {
      this.lostSound.play();
      this.lostSoundPlayed = true;
    }
  }

  //WOOD EQUIPMENT MODAL SOUND
  playWoodSound() {
    this.woodSound.play();
    setTimeout(() => {
      this.stopWoodSound();
    }, this.soundDuration);
  }

  stopWoodSound() {
    this.woodSound.pause();
    this.woodSound.currentTime = 0;
  }

  //IRON EQUIPMENT MODAL SOUND
  playIronSound() {
    this.ironSound.play();
    setTimeout(() => {
      this.stopIronSound();
    }, this.soundDuration);
  }

  stopIronSound() {
    this.ironSound.pause();
    this.ironSound.currentTime = 0;
  }

  //GOLD EQUIPMENT MODAL SOUND
  playGoldSound() {
    this.goldSound.play();
    setTimeout(() => {
      this.stopGoldSound();
    }, this.soundDuration);
  }

  stopGoldSound() {
    this.goldSound.pause();
    this.goldSound.currentTime = 0;
  }

  //MONEY FOR RESSOURCES MODALS
  playMoneySound() {
    this.moneySound.play();
    setTimeout(() => {
      this.stopMoneySound();
    }, this.soundDuration);
  }

  stopMoneySound() {
    this.goldSound.pause();
    this.goldSound.currentTime = 0;
  }

  //COWBOY SOUND
  playCowboySound() {
    this.cowboySound.play();
    setTimeout(() => {
      this.stopMoneySound();
    }, this.soundDuration);
  }

  stopCowboySound() {
    this.cowboySound.pause();
    this.cowboySound.currentTime = 0;
  }
}
