import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlistComponent } from './userlist/userlist.component';
import { LoginlistComponent } from './loginlist/loginlist.component';

console.warn('user module load')
@NgModule({
  declarations: [
    UserlistComponent,
    LoginlistComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
