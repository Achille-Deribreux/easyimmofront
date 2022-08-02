import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validator, Validators} from "@angular/forms";
import {IncomeService} from "../../income.service";
import {IncomeBody} from "../../models/income-body.model";

@Component({
  selector: 'app-income-creation-form',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private incomeService: IncomeService) { }

  formValues = this.formBuilder.group({
    amount:[''],
    date:[''],
    description:[''],
  })


  onSubmit() {

    const value = this.formValues.value;
    const newIncomeSummary = new IncomeBody(value.amount, value.date, value.description, 0, 1);
    this.incomeService.addIncome(newIncomeSummary);
  }

  ngOnInit(): void {
  }

}
