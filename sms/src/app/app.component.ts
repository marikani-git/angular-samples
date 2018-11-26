import { Component } from '@angular/core';
import { loginCounter } from './constants/sms-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sms';
  loginSecond = 0;

  constructor() {
    loginCounter.subscribe(data => this.loginSecond = data);
  }
}
