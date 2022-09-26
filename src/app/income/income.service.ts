import { Injectable } from '@angular/core';
import {IncomeSummary} from "./models/income-summary.model";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {IncomeBody} from "./models/income-body.model";
import {Observable} from "rxjs";
import { IncomeDetails } from './models/income-details.model';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private router : Router, private http: HttpClient) { }

  backBaseHost = "https://easy-immo-back.herokuapp.com/";
  backDevHost = "http://localhost:8080/";

  private _refreshRequired = new Subject<void>();

  get RefreshRequired(){
    return this._refreshRequired;
  }

  getAllIncomes(): Observable<IncomeSummary[]> {
    return this.http.get<IncomeSummary[]>(this.backBaseHost+'income/getAll');
  }

  getIncome(id:number) : Observable<IncomeDetails> {
    const params = new HttpParams()
      .set('id', id);
    return this.http.get<IncomeDetails>(this.backBaseHost+"income/getById", {params});
  }

  addIncome(income: IncomeBody)  : Observable<IncomeBody> {
    return this.http.post<IncomeBody>(this.backBaseHost+'income/add', income);
  }

  editIncome(income: IncomeBody, id : number) : Observable<IncomeBody> {
    const params = new HttpParams()
      .set('id', id);
    return this.http.put<IncomeBody>(this.backBaseHost+"income/update",income, {params});
  }

  deleteIncome(id : number) {
    const params = new HttpParams()
      .set('id', id);
    return this.http.delete(this.backBaseHost+"income/deleteById", {params}).pipe(
      tap(() => {
        this.RefreshRequired.next();
      })
    );
  }
}
