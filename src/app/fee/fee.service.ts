import { Injectable } from '@angular/core';
import {FeeSummary} from "./model/fee-summary.model";
import {FeeBody} from "./model/fee-body.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, Subject, tap} from "rxjs";
import {FeeDetail} from "./model/fee-detail";

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  constructor(private http:HttpClient) {
  }

  backBaseHost = "https://easy-immo-back.herokuapp.com/";
  backDevHost = "http://localhost:8080/";

  private _refreshRequired = new Subject<void>();

  get RefreshRequired(){
    return this._refreshRequired;
  }

  getAllFees() : Observable<FeeSummary[]> {
    return this.http.get<FeeSummary[]>(this.backBaseHost+"fee/getAll");
  }

  getFee(id:number) : Observable<FeeDetail> {
    const params = new HttpParams()
      .set('id', id);
    return this.http.get<FeeDetail>(this.backBaseHost+"fee/getById", {params});
  }

  addFee(fee : FeeBody) : Observable<FeeBody> {
    return this.http.post<FeeBody>(this.backBaseHost+"fee/add", fee);
  }

  editFee(fee: FeeBody, id : number) : Observable<FeeBody> {
    const params = new HttpParams()
      .set('id', id);
    return this.http.put<FeeBody>(this.backBaseHost+"fee/update",fee, {params});
  }

  deleteFee(id : number) {
    const params = new HttpParams()
      .set('id', id);
    return this.http.delete(this.backBaseHost+"fee/deleteById", {params}).pipe(tap(() => { this._refreshRequired.next(); })).subscribe();
  }
}
