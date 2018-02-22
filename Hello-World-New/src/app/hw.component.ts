import {Component} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hw.component.html',
  styleUrls: ['./hw.component.css']
})

export class HwComponent {
 appTitle = 'Hello World Angular4' ;
 developerName = ['Marikani', 'Yamuna'];
}
