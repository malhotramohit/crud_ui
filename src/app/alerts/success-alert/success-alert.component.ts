import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  username = null;

  constructor() { }

  ngOnInit() {
  }

  isDisabled(){
    if(this.username===null){
      return true;
    }
    else{
      return false;
    }
  }
  clearUsername(event : Event){
    this.username=null;
  }

}
