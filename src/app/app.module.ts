import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoMaterialModule } from "./shared/material-module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DemoMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
