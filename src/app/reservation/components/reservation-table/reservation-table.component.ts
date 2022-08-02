import {Component, Input} from '@angular/core';
import {ReservationSummary} from "../../model/reservation-summary.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-table',
  templateUrl: './reservation-table.component.html',
  styleUrls: ['./reservation-table.component.scss']
})
export class ReservationTableComponent {

  @Input() reservationList! : ReservationSummary[];
  @Input() displayedColumns! : string[];

  constructor(private router : Router) { }


  showReservation(id:number) {
    this.router.navigateByUrl('/reservation/'+id);
  }

  redirectAddNewReservation() {
    this.router.navigateByUrl('/reservation/add');
  }
}
