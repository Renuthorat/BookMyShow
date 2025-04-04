import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }
  api:string='https://jsonplaceholder.typicode.com/users';
  userData:any;

  getData(){
    this.http.get(this.api).subscribe((res)=>{
      this.userData=res;
      console.log(this.userData,'test')
    })
  }

}
