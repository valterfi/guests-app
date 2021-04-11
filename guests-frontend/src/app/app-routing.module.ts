import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestsListComponent } from './components/guests-list/guests-list.component';
import { GuestDetailsComponent } from './components/guest-details/guest-details.component';
import { AddGuestComponent } from './components/add-guest/add-guest.component';

const routes: Routes = [
  { path: '', redirectTo: 'guests', pathMatch: 'full' },
  { path: 'guests', component: GuestsListComponent },
  { path: 'guests/:id', component: GuestDetailsComponent },
  { path: 'add', component: AddGuestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
