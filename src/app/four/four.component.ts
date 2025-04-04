import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DataService } from '../shared/service/data.service';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  // constructor(private dataServe:DataService) { }
  myIntervalVar: Subscription | any;

  userName:string='Angular'

  userDetail(uname:any){
    this.userName=uname.value;
    this.dataServe.userName.next(uname.value)

    console.log(uname)
  }

  constructor(private dataServe: DataService) { 
    this.dataServe.userName.subscribe(uname=>{
     this.userName=uname;
    })

   }

  ngOnInit(): void {
    // var inter=interval(2000)  
    this.dataServe.myAdvanceObservableTwo.subscribe((val:any)=>{
      // console.log(val);
    })
    
  }
  // ngOnDestroy(): void { this.myIntervalVar.unsubscribe()}


}
