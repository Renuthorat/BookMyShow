import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourComponent } from './four/four.component';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';
import { NgtemNgcontainerComponent } from './ngtem-ngcontainer/ngtem-ngcontainer.component';
import { CardComponent } from './component/card/card.component';

const routes: Routes = [
  {path:'one',component :OneComponent},
  {path:'two',component :TwoComponent},
  {path:'three',component :ThreeComponent},
  {path:'four',component :FourComponent},
  {path:'ngtem-ngcontainer',component :NgtemNgcontainerComponent},
  {path:'card',component :CardComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


const route:Routes=[
]
