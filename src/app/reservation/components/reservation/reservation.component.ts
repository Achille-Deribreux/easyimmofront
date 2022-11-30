import { Component, OnInit } from '@angular/core';
import {ReservationDetail} from "../../model/reservation-detail.model";
import {ReservationService} from "../../reservation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  reservation! : ReservationDetail;
  displayedFeesColumns: string[] = ['date','supplier',"amount","button"];

  constructor(private reservationService:ReservationService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.reservationService.getReservation(this.route.snapshot.params['id']).subscribe({
      next: (reservation: ReservationDetail) => {
        this.reservation = reservation;
      },
      error: (err) => {console.log(err);}
    });

    this.reservation.id = this.route.snapshot.params['id'];
  }

  redirectToProperty():void {
    this.router.navigateByUrl("property/"+this.reservation.property.id);
  }

  deleteReservation(id: number): void {
    this.reservationService.deleteReservation(id).subscribe();
    this.router.navigateByUrl('reservations');
  }
}
