import { Injectable } from '@angular/core';
import {FeeSummary} from "./model/fee-summary.model";
import {FeeBody} from "./model/fee-body.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  constructor(private http:HttpClient) {
  }

  backBaseHost = "https://easy-immo-back.herokuapp.com/";
  backDevHost = "http://localhost:8080/";

  getAllFees() : Observable<FeeSummary[]> {
    return this.http.get<FeeSummary[]>("https://easy-immo-back.herokuapp.com/fee/getAll");
  }

  getFee(id:number) : Observable<FeeBody> {
    const params = new HttpParams()
      .set('id', id);
    return this.http.get<FeeBody>(this.backBaseHost+"fee/getById", {params});
  }

  addFee(fee : FeeBody) : Observable<FeeBody> {
    return this.http.post<FeeBody>(this.backBaseHost+"fee/add", fee);
  }

  editFee(fee: FeeBody, id : number) : Observable<FeeBody> {
    const params = new HttpParams()
      .set('id', id);
    return this.http.put<FeeBody>(this.backBaseHost+"fee/update",fee, {params});
  }
}
