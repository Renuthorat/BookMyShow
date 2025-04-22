import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let i=1;
    console.log(i++);
    console.log(--i);
setTimeout(()=>{
  console.log('settimeout',i);

})
console.log(++i);
console.log(i--);

  }



}
