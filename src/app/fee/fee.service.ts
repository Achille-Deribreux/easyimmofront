import { Injectable } from '@angular/core';
import {FeeSummary} from "./model/fee-summary.model";
import {FeeBody} from "./model/fee-body.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  constructor(private http:HttpClient) {
  }

  getAllFees() : Observable<FeeSummary[]> {
    return this.http.get<FeeSummary[]>("https://easy-immo-back.herokuapp.com/fee/getAll");
  }


  addFee(fee : FeeBody) : Observable<FeeBody> {
    return this.http.post<FeeBody>("https://easy-immo-back.herokuapp.com/fee/add", fee);
  }
}
