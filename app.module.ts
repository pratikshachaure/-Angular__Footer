import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstProjectComponent } from './first-project/first-project.component';
import { SecondProjectComponent } from './second-project/second-project.component';
import { ThirdProjectComponent } from './third-project/third-project.component';
import { FourProjectComponent } from './four-project/four-project.component';
 
@NgModule({
  declarations: [
    AppComponent,
    FirstProjectComponent,
    SecondProjectComponent,
    ThirdProjectComponent,
    FourProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
