import { Component, OnInit } from '@angular/core';
import { GuestService } from 'src/app/services/guest.service';

@Component({
  selector: 'app-add-guest',
  templateUrl: './add-guest.component.html',
  styleUrls: ['./add-guest.component.css']
})
export class AddGuestComponent implements OnInit {
  guest = {
    name: '',
    email: '',
    confirmed: false
  };
  submitted = false;

  constructor(private guestService: GuestService) { }

  ngOnInit(): void {
  }

  saveGuest(): void {
    const data = {
      name: this.guest.name,
      email: this.guest.email
    };

    this.guestService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newGuest(): void {
    this.submitted = false;
    this.guest = {
      name: '',
      email: '',
      confirmed: false
    };
  }

}
