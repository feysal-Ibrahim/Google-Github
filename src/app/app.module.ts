import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import {GitService} from './git.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitDisplayComponent } from './git-display/git-display.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { GitRepoComponent } from './git-repo/git-repo.component';
@NgModule({
  declarations: [
    AppComponent,
    GitDisplayComponent,
    GitSearchComponent,
    GitRepoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(), // normal progress bar
    NgProgressHttpModule // progress bar to load http requests
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
