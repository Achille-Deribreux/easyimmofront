import { Injectable } from '@angular/core';
import {IncomeSummary} from "./models/income-summary.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {IncomeBody} from "./models/income-body.model";

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(private router : Router, private http: HttpClient) { }

  demoIncomeSummary1 : IncomeSummary = new IncomeSummary(1, new Date("2020-01-01"),1341,"Income 1 for property 1");
  demoIncomeSummary2: IncomeSummary = new IncomeSummary(2, new Date("2020-01-02"),453,"Income 2 for property 1");
  demoIncomeSummary3: IncomeSummary = new IncomeSummary(3, new Date("2020-01-01"),123,"Income 1 for property 1");
  demoIncomeSummaries: IncomeSummary[] = [this.demoIncomeSummary1, this.demoIncomeSummary2, this.demoIncomeSummary3];

  getAllIncomes() : IncomeSummary[] {
    //TODO: http call to get all properties
    return this.demoIncomeSummaries;
  }

  showIncome(id:number) {
    this.router.navigateByUrl('/income/'+id);
  }

  addIncome(income: IncomeBody) {
    this.http
      .post('https://easy-immo-back.herokuapp.com/income/add', income)
      .subscribe();
  }
}
