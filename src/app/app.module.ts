import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrnekComponent } from './ornek/ornek.component';
import { TokenInterceptor } from './interceptor/token.interceptor'; // Added import statement
import { CustomerrorInterceptor } from './interceptor/customerror.interceptor';

@NgModule({
  declarations: [AppComponent, OrnekComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }, // Added provider for TokenInterceptor
    { provide: HTTP_INTERCEPTORS, useClass: CustomerrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
