import { Injectable } from '@angular/core';
import {ReservationSummary} from "./model/reservation-summary.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReservationBody} from "./model/reservation-body.model";
import {ReservationDetail} from "./model/reservation-detail.model";

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

  getReservation(id: number) : Observable<ReservationDetail> {
    return this.http.get<ReservationDetail>(this.backBaseHost+"reservation/getById?id="+id);
  }

  addReservation(reservation : ReservationBody) : Observable<ReservationBody> {
    return this.http.post<ReservationBody>(this.backBaseHost+"reservation/add", reservation);
  }

  editReservation(reservation: ReservationBody, id : number) : Observable<ReservationBody> {
    const params = new HttpParams()
      .set('id', id);
    return this.http.put<ReservationBody>(this.backBaseHost+"reservation/update",reservation, {params});
  }


}
