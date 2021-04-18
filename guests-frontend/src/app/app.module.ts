import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGuestComponent } from './components/add-guest/add-guest.component';
import { GuestDetailsComponent } from './components/guest-details/guest-details.component';
import { GuestsListComponent } from './components/guests-list/guests-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddGuestComponent,
    GuestDetailsComponent,
    GuestsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
