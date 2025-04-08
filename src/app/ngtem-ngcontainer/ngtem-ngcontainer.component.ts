import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtem-ngcontainer',
  templateUrl: './ngtem-ngcontainer.component.html',
  styleUrls: ['./ngtem-ngcontainer.component.css']
})
export class NgtemNgcontainerComponent implements OnInit {
  renu:boolean=true;
  isManager:boolean=true;
  fontColor='orange';
  canClick=false;

  constructor() { }

  ngOnInit(): void {
  }
  sayMessage(){
    alert('It works')
  }

}
