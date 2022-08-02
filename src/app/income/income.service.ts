import { Injectable } from '@angular/core';
import {IncomeSummary} from "./models/income-summary.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {IncomeBody} from "./models/income-body.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private router : Router, private http: HttpClient) { }

  getAllIncomes(): Observable<IncomeSummary[]> {
    return this.http.get<IncomeSummary[]>('https://easy-immo-back.herokuapp.com/income/getAll');
  }

  showIncome(id:number) {
    this.router.navigateByUrl('/income/'+id);
  }

  addIncome(income: IncomeBody) {
    this.http.post('https://easy-immo-back.herokuapp.com/income/add', income).subscribe();
  }
}
