import { Component, OnInit } from '@angular/core';
import {IncomeService} from "../../income.service";
import {ActivatedRoute, Router} from "@angular/router";
import { IncomeDetails } from '../../models/income-details.model';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  income!: IncomeDetails;

  constructor(private incomeService: IncomeService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.incomeService.getIncome(this.route.snapshot.params['id']).subscribe({
      next: (income: IncomeDetails) => {
        this.income = income;
      },
      error: (err) => {console.log(err);}
    });

    this.income.id = this.route.snapshot.params['id'];

    this.incomeService.RefreshRequired.subscribe();
  }

  deleteIncome(id: number):void {
    this.incomeService.deleteIncome(id);
    this.router.navigateByUrl('incomes');
  }
}
