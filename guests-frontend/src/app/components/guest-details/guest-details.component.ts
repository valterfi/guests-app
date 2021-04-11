import { Component, OnInit } from '@angular/core';
import { GuestService } from 'src/app/services/guest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {
  currentGuest = null;
  message = '';

  constructor(
    private guestService: GuestService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getGuest(this.route.snapshot.paramMap.get('id'));
  }

  getGuest(id): void {
    this.guestService.get(id)
      .subscribe(
        data => {
          this.currentGuest = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      title: this.currentGuest.title,
      description: this.currentGuest.description,
      published: status
    };

    this.guestService.update(this.currentGuest.id, data)
      .subscribe(
        response => {
          this.currentGuest.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateGuest(): void {
    this.guestService.update(this.currentGuest.id, this.currentGuest)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The guest was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteGuest(): void {
    this.guestService.delete(this.currentGuest.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/guests']);
        },
        error => {
          console.log(error);
        });
  }
}
