import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@awesome-cordova-plugins/flashlight/ngx';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.page.html',
  styleUrls: ['./flash.page.scss'],
})
export class FlashPage implements OnInit {
  constructor(private flashlight: Flashlight) {}

  ngOnInit() {}
  onFlash() {
    this.flashlight.switchOn();
  }
  offFlash() {
    this.flashlight.switchOff();
  }
}
