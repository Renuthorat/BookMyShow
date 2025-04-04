import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/service/data.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {

  constructor(private dataServe: DataService) { }
  // pro:boolean=true;
  renu:boolean=true;


  ngOnInit(): void {
    this.dataServe.myAdvanceObservableTwo.subscribe((val: any) => {
      console.log(val);
    })
  }

  clickMe(val:any){
    console.log(val)
  }

}
