import { Injectable } from '@angular/core';
import {Reservation} from "./model/reservation.model";
import {ReservationSummary} from "./model/reservation-summary.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  demoReservation1: Reservation = new Reservation(1, 1, new Date(2020, 1, 1), new Date(2020, 1, 1), new Date(2021, 1, 1), 1, [1,2]);
  demoReservation2: Reservation = new Reservation(2, 1, new Date(2020, 1, 1), new Date(2021, 1, 1), new Date(2022, 1, 1), 2, [2]);
  demoReservation3: Reservation = new Reservation(3, 1, new Date(2020, 1, 1), new Date(2022, 1, 1), new Date(2023, 1, 1), 3, []);

  demoReservations: Reservation[] = [this.demoReservation1, this.demoReservation2, this.demoReservation3];

  demoReservationSummary1 : ReservationSummary = new ReservationSummary(1,"house 1", new Date(2020, 9, 1), new Date(2021, 1, 1), 1231);
  demoReservationSummary2 : ReservationSummary = new ReservationSummary(2, "house 2", new Date(2023, 9, 1), new Date(2021, 1, 1), 1231);
  demoReservationSummary3 : ReservationSummary = new ReservationSummary(3, "house 3", new Date(2029, 12, 1), new Date(2021, 1, 1), 12312);
  demoReservationSummarys: ReservationSummary[] = [this.demoReservationSummary1, this.demoReservationSummary2, this.demoReservationSummary3];

  getAllReservations() : ReservationSummary[] {
    //TODO: http call to get all reservations
    return this.demoReservationSummarys;
  }

  getReservation(id: number) {
     //TODO make http call to get reservation with id and precise return type
     return this.demoReservations.find(reservation => reservation.id === id);
  }

  addReservation(reservation: Reservation) {
    //TODO make http call to add reservation
    this.demoReservations.push(reservation);
  }

  updateReservation(reservation: Reservation) {
    //TODO make http call to update reservation
    let index = this.demoReservations.findIndex(r => r.id === reservation.id);
    this.demoReservations[index] = reservation;
  }

  deleteReservation(id: number) {
    //TODO make http call to delete reservation
    let index = this.demoReservations.findIndex(r => r.id === id);
    this.demoReservations.splice(index, 1);
  }
}
