import { Component, OnInit } from '@angular/core';
import {IncomeSummary} from "../../models/income-summary.model";
import {IncomeService} from "../../income.service";

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {

  constructor(private incomeService : IncomeService) { }

  incomes! : IncomeSummary[];
  displayedColumns: string[] = ['date', 'amount', 'description',"button"];

  ngOnInit(): void {
     this.incomeService.getAllIncomes().subscribe({
       next: (income: IncomeSummary[]) => {
         this.incomes = income;
       }
     });
  }

}
