import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componnents/login/login.component';
import { HomeComponent } from './componnents/home/home.component';
import { HomeDetailsComponent } from './componnents/home-details/home-details.component';
import { HomeListComponent } from './componnents/home-list/home-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeDetailsComponent,
    HomeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
