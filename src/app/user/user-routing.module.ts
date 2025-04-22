import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { LoginlistComponent } from './loginlist/loginlist.component';

const routes: Routes = [
   {path:'userlist',component:UserlistComponent},
    {path:'loginlist',component:LoginlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
