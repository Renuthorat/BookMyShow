import { Component, OnInit } from '@angular/core';
import { zip } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  ngOnInit(): void {
    let result='renuka'
    result.replace('n','u');
    console.log(result);


    let i=1;
    console.log(i++);
    console.log(--i);
setTimeout(()=>{
  console.log('settimeout',i);

})
console.log(++i);
console.log(i--);

  }
  title = 'observable';
  username:string='Jagdamba';
  data=10;
  uss(uname:any){
  this.username=uname;
  }
  submit(){
  this.data=Math.floor(Math.random()*10);
  const fruits=['apple','mango','banana','grapes'];
    fruits.splice(1, 2);
    console.log(fruits);
    fruits.slice(1);
  };

  

}