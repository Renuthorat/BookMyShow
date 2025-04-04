import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { NgtemNgcontainerComponent } from './ngtem-ngcontainer/ngtem-ngcontainer.component';
import { CardComponent } from './component/card/card.component';
import { HttpClientModule}from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    NgtemNgcontainerComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
