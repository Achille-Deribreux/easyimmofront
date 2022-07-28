import { Injectable } from '@angular/core';
import {ReservationSummary} from "./model/reservation-summary.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  demoReservationSummary1 : ReservationSummary = new ReservationSummary(1,"house 1", new Date(2020, 9, 1), new Date(2021, 1, 1), 1231);
  demoReservationSummary2 : ReservationSummary = new ReservationSummary(2, "house 2", new Date(2023, 9, 1), new Date(2021, 1, 1), 1231);
  demoReservationSummary3 : ReservationSummary = new ReservationSummary(3, "house 3", new Date(2029, 12, 1), new Date(2021, 1, 1), 12312);
  demoReservationSummarys: ReservationSummary[] = [this.demoReservationSummary1, this.demoReservationSummary2, this.demoReservationSummary3];

  getAllReservations() : ReservationSummary[] {
    //TODO: http call to get all reservations
    return this.demoReservationSummarys;
  }
}
