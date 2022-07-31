import { Component, OnInit } from '@angular/core';
import {IncomeSummary} from "../../models/income-summary.model";
import {NgForm} from "@angular/forms";
import {IncomeService} from "../../income.service";

@Component({
  selector: 'app-income-creation-form',
  templateUrl: './income-creation-form.component.html',
  styleUrls: ['./income-creation-form.component.scss']
})
export class IncomeCreationFormComponent implements OnInit {

  constructor(private incomeService: IncomeService) { }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIncomeSummary = new IncomeSummary(value.date, value.montant, value.description, 0, 1);
    this.incomeService.addIncome(newIncomeSummary);
  }

  ngOnInit(): void {
  }

}
