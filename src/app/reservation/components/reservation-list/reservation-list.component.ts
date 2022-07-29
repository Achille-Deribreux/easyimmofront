import { Component, OnInit } from '@angular/core';
import {ReservationSummary} from "../../model/reservation-summary.model";
import {ReservationService} from "../../reservation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {

  constructor(private reservationService : ReservationService, private router : Router) { }

  reservations!: ReservationSummary[];
  displayedColumns: string[] = ['propertyName', 'fromDate','toDate','price',"button"];

  ngOnInit(): void {
    this.reservations = this.reservationService.getAllReservations();
  }

  showReservation(id:number) {
    this.router.navigateByUrl('/reservation/'+id);
  }

}
