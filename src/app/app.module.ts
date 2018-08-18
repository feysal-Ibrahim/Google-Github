import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitDisplayComponent } from './git-display/git-display.component';
@NgModule({
  declarations: [
    AppComponent,
    GitDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(), // normal progress bar
    NgProgressHttpModule // progress bar to load http requests
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
