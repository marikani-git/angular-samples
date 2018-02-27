import {Component} from '@angular/core';

@Component({
    selector: 'app-main-comp',
    templateUrl: './comp-main.component.html',
    styleUrls: ['./comp-main.component.css']
})

export class MainComponent {
    mainText = 'this is text from sub component';
}
