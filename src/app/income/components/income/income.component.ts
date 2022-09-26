import { Component, OnInit } from '@angular/core';
import {IncomeService} from "../../income.service";
import {IncomeBody} from "../../models/income-body.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  income!: IncomeBody;

  constructor(private incomeService: IncomeService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.incomeService.getIncome(this.route.snapshot.params['id']).subscribe({
      next: (income: IncomeBody) => {
        this.income = income;
      },
      error: (err) => {console.log(err);}
    });

    this.income.id = this.route.snapshot.params['id'];

    this.incomeService.RefreshRequired.subscribe();
  }

  deleteIncome(id: number):void {
    this.incomeService.deleteIncome(id).subscribe();
    this.router.navigateByUrl('incomes');
  }
}
