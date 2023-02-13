import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElephantComponent } from './components/elephant.component';
import { TrexComponent } from './components/trex.component';
import { HomeComponent } from './components/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './components/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ElephantComponent,
    TrexComponent,
    HomeComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
