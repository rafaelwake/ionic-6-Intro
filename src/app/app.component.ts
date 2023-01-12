import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuCollections = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Help', url: 'help', icon: 'warning' },
    { title: 'Card', url: 'card', icon: 'bag' },
    { title: 'Alert', url: 'alert', icon: 'bag' },
    { title: 'Câmera', url: 'camera', icon: 'bag' },
  ];
  constructor() {}
}
