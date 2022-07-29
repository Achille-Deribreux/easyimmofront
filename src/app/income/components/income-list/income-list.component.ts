import { Component, OnInit } from '@angular/core';
import {IncomeSummary} from "../../models/income-summary.model";
import {IncomeService} from "../../income.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {

  constructor(private incomeService : IncomeService, private router : Router) { }

  incomes! : IncomeSummary[];
  displayedColumns: string[] = ['date', 'amount', 'description',"button"];

  ngOnInit(): void {
    this.incomes = this.incomeService.getAllIncomes();
  }

}
