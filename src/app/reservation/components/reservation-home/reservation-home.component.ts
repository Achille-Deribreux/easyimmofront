import { Component, OnInit } from '@angular/core';
import {ReservationSummary} from "../../model/reservation-summary.model";
import {ReservationService} from "../../reservation.service";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-home.component.html',
  styleUrls: ['./reservation-home.component.scss']
})
export class ReservationHomeComponent implements OnInit {

  constructor(private reservationService : ReservationService) { }

  reservations!: ReservationSummary[];
  displayedColumns: string[] = ['propertyName', 'fromDate','toDate','price',"button"];

  ngOnInit(): void {
     this.reservationService.getAllReservations().subscribe({
        next: (reservations: ReservationSummary[]) => {
          this.reservations = reservations;
        }
     });
  }

}
