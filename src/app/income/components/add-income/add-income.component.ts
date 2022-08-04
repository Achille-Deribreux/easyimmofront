import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validator, Validators} from "@angular/forms";
import {IncomeService} from "../../income.service";
import {IncomeBody} from "../../models/income-body.model";
import {IncomeSummary} from "../../models/income-summary.model";
import {PropertyService} from "../../../property/property.service";
import {PropertySummary} from "../../../property/models/property-summary.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-income-creation-form',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private incomeService: IncomeService,
              private propertyService: PropertyService,
              private router : Router) { }

  ngOnInit(): void {
    this.propertyService.getAllProperties().subscribe({
      next: (properties: PropertySummary[]) => {
        this.properties = properties;
      }
    })
  }

  properties! : PropertySummary[];

  formValues = this.formBuilder.group({
    amount:[''],
    date:[''],
    description:[''],
    propertyId:['']
  })


  onSubmit() {
    const value = this.formValues.value;
    const newIncome = new IncomeBody(value.amount, value.date, value.description, value.propertyId);
    this.incomeService.addIncome(newIncome);
    this.router.navigateByUrl("/incomes");
  }
}
