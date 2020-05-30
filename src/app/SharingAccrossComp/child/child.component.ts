import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()  childVar = 'I am child value';
  colorVal = 'red';

  constructor() { }

  ngOnInit() {
  }


  onClickInChild(e:Event){
    this.colorVal = 'pink';
  }
}
