import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDiscComponent } from './add-disc/add-disc.component';
import { DiscsComponent } from './discs/discs.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";







@NgModule({
  declarations: [
    AppComponent,
    AddDiscComponent,
    DiscsComponent,
    //PuttingPractiseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
