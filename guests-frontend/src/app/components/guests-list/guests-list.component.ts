import { Component, OnInit } from '@angular/core';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-guests-list',
  templateUrl: './guests-list.component.html',
  styleUrls: ['./guests-list.component.css']
})
export class GuestsListComponent implements OnInit {

  guests: any;
  currentGuest = null;
  currentIndex = -1;
  name = '';

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
    this.retrieveGuests();
  }

  retrieveGuests(): void {
    this.guestService.getAll()
      .subscribe(
        data => {
          this.guests = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveGuests();
    this.currentGuest = null;
    this.currentIndex = -1;
  }

  setActiveGuest(guest, index): void {
    this.currentGuest = guest;
    this.currentIndex = index;
  }

  removeAllGuests(): void {
    this.guestService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchName(): void {
    this.guestService.findByName(this.name)
      .subscribe(
        data => {
          this.guests = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
