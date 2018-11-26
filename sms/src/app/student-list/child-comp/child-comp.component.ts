import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  @Input() parentCompValue: string;
  @Output() fromChild = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  triggerEvetEmitter = () => {
    console.log('child comp click');
    this.fromChild.emit('event emiiter emits value from child');
  }

  passValueToParent = () =>  {
    console.log('child comp click event');
    this.fromChild.emit({name: 'mari', dept: 'ece'});
  }

}
