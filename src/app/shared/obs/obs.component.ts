import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval,Subscription, Observable} from 'rxjs';
import { timeout } from 'q';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit, OnDestroy {


  private myObSubscription : Subscription;

  constructor() { }

  ngOnInit() {
    this.myObSubscription  = interval(1000).subscribe(count=>{
      console.log(count);
    });

    const myObserable =  Observable.create(observer=>{
        let count = 0;
        setInterval(()=>{
          observer.next(count);
          count++;          
        },1000)

    });

    myObserable.subscribe(data=>{
        console.log("data from my observable :: "+data);
    })
  }

  ngOnDestroy(){
    this.myObSubscription.unsubscribe();
  }

}
