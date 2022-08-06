import { Injectable } from '@angular/core';
import {IncomeSummary} from "./models/income-summary.model";
import {Router} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";
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
    return this.http.get<IncomeSummary[]>(this.backBaseHost+'income/getAll');
  }

  showIncome(id:number) {
    this.router.navigateByUrl('/income/'+id);
  }

  addIncome(income: IncomeBody) {
    this.http.post(this.backBaseHost+'income/add', income).subscribe();
  }

  editIncome(income: IncomeBody, id : number) : Observable<IncomeBody> {
    const params = new HttpParams()
      .set('id', id);
    return this.http.put<IncomeBody>(this.backBaseHost+"income/update",income, {params});
  }
}
