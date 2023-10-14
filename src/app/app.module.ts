import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Added import statement
import { AppRoutingModule } from './app-routing.module'; // Changed import statement
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Added HttpClientModule to imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
