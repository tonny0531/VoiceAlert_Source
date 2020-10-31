import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  audio = new Audio();
  title = 'alert-voice';
  sub: Subscription;
  source = interval(3000);

  ngOnInit(): void {
    this.audio.src = 'assets/babubabu.mp3';
    this.audio.load();
  }

  play(): void {
    this.audio.play();
    this.sub = this.source.subscribe(v => {
      console.log('log');
      this.audio.play();
    });
  }

  stop(): void {
      console.log('stop');
      if (this.sub){
        this.sub.unsubscribe();
      }
  }
}
