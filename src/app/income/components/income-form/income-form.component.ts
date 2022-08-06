import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {IncomeService} from "../../income.service";
import {PropertySummary} from "../../../property/models/property-summary.model";
import {PropertyService} from "../../../property/property.service";
import {IncomeBody} from "../../models/income-body.model";
import {tap} from "rxjs";

@Component({
  selector: 'app-income-form',
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.scss']
})
export class IncomeFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private incomeService: IncomeService,
              private propertyService: PropertyService,
              private route:ActivatedRoute,
              private router:Router) { }

  id!:number;
  @Input() submitCase!:string;
  properties! : PropertySummary[];

  formValues = this.formBuilder.group({
    amount:new FormControl(''),
    date:new FormControl(''),
    description:new FormControl(''),
    propertyId:new FormControl(''),
  })

  ngOnInit(): void {
    if (this.submitCase === 'update') {
      this.id = this.route.snapshot.params['id'];
      this.incomeService.getIncome(this.id).subscribe(income => {
        this.formValues = this.formBuilder.group({
          amount:new FormControl(income.amount),
          date:new FormControl(income.date),
          description:new FormControl(income.description),
          propertyId:new FormControl(income.propertyId),
        })
      });
    }
    this.propertyService.getAllProperties().subscribe({
      next: (properties: PropertySummary[]) => {
        this.properties = properties;
      }
    })
  }

  onSubmit() {
    const value = this.formValues.value;
    const newIncome = new IncomeBody(value.amount, value.date, value.description, value.propertyId);
    if(this.submitCase === 'add') {
      this.incomeService.addIncome(newIncome).pipe(tap(() => this.router.navigateByUrl("/incomes"))).subscribe();
    }
    else {
      this.incomeService.editIncome(newIncome, this.id).pipe(tap(() => this.router.navigateByUrl("/incomes"))).subscribe();
    }
  }
}
