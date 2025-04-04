import { Component, Input, OnInit } from '@angular/core';
import { defer, fromEvent, interval } from 'rxjs';
import { DataService } from '../shared/service/data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  userName:string='Angular';
  
  constructor(private dataServe: DataService) { }

  userDetail(uname:any){
    this.userName=uname;

    this.dataServe.userName.next(uname);

  }

  data=[
    {
    fName:'Renuka',
    lName:'Thorat',
    contact:9657145969,
  }
]

  ngOnInit(): void {
    // setTimeout(() => {
    //    return this.dataServe.myAdvanceObservableTwo.next('hello')
    // }, 1000)

    // const clicksOrInterval = defer(() => {
    //   return Math.random() > 0.5
    //     ? fromEvent(document, 'click')
    //     : interval(1000);
    // });
    // clicksOrInterval.subscribe(x => console.log(x));
    // console.log(this.data);
  }

}
