import { Injectable } from '@angular/core';
import {ReservationSummary} from "./model/reservation-summary.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReservationBody} from "./model/reservation-body.model";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  backBaseHost = "https://easy-immo-back.herokuapp.com/";
  backDevHost = "http://localhost:8080/";

 constructor(private http:HttpClient) {
 }
  getAllReservations() : Observable<ReservationSummary[]> {
    return this.http.get<ReservationSummary[]>(this.backBaseHost+"reservation/getAll");
  }

  addReservation(reservation : ReservationBody) : Observable<ReservationBody> {
    return this.http.post<ReservationBody>(this.backBaseHost+"reservation/add", reservation);
  }


}
