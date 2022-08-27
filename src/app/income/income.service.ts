import { Injectable } from '@angular/core';
import {IncomeSummary} from "./models/income-summary.model";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {IncomeBody} from "./models/income-body.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private router : Router, private http: HttpClient) { }

  backBaseHost = "https://easy-immo-back.herokuapp.com/";
  backDevHost = "http://localhost:8080/";

  getAllIncomes(): Observable<IncomeSummary[]> {
    return this.http.get<IncomeSummary[]>(this.backDevHost+'income/getAll');
  }

  getIncome(id:number) : Observable<IncomeBody> {
    const params = new HttpParams()
      .set('id', id);
    return this.http.get<IncomeBody>(this.backBaseHost+"income/getById", {params});
  }

  addIncome(income: IncomeBody)  : Observable<IncomeBody> {
    return this.http.post<IncomeBody>(this.backBaseHost+'income/add', income);
  }

  editIncome(income: IncomeBody, id : number) : Observable<IncomeBody> {
    const params = new HttpParams()
      .set('id', id);
    return this.http.put<IncomeBody>(this.backBaseHost+"income/update",income, {params});
  }
}
