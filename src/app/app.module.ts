import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoMaterialModule } from "./shared/material-module";
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
