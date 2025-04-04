import { Component, OnDestroy, OnInit ,Input} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../shared/service/data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit, OnDestroy{
  myIntervalVar:Subscription | any;
  userName:string='Angular'
  @ Input() item=0;

  userDetail(uname:any){
    this.userName=uname.value;
    this.dataServe.userName.next(uname.value);
    console.log(uname);
  }

  constructor(private dataServe: DataService) { 
    this.dataServe.userName.subscribe(uname=>{
     this.userName=uname;
    })

    this.observable=new Observable(observer=>{
      setTimeout(()=>{
        observer.next("First call");
        console.log("observable completed" );
      },1000)

      setTimeout(()=>{
        observer.next("Second call")
      },2000)

      setTimeout(()=>{
        observer.complete()
      })
    })

    
    this.observable.subscribe({
      next: (value:any) => console.log(value),  // Emits multiple values
      complete: () => console.log("Observable completed!")
    });
   }
  ngOnInit(): void {

    this.myIntervalVar=this.dataServe.filterMyCustomObservable().subscribe((val:any)=>
    { console.log(val)},
    (err:any)=>{console.log(err)},
    ()=>{console.log('Hurray the observable is complete!')}
    )
  }
  ngOnDestroy(): void { this.myIntervalVar.unsubscribe()}


  observable:any;

  

}
