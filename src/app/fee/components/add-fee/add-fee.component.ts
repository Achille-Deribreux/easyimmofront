import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FeeService} from "../../fee.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {FeeBody} from "../../model/fee-body.model";
import {PropertySummary} from "../../../property/models/property-summary.model";
import {PropertyService} from "../../../property/property.service";

@Component({
  selector: 'app-add-fee',
  templateUrl: './add-fee.component.html',
  styleUrls: ['./add-fee.component.scss']
})
export class AddFeeComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,
              private feeService : FeeService,
              private router : Router,
              private propertyService : PropertyService) { }

  ngOnInit(): void {
    this.propertyService.getAllProperties().subscribe({
        next: (properties: PropertySummary[]) => {
          this.properties = properties;
        }
      }
    );
  }

  properties!: PropertySummary[];

  formValues = this.formBuilder.group({
    supplier: [''],
    amount: [''],
    date: [''],
    description: [''],
    propertyId: ['']
  });

  onSubmit() {
    let fee : FeeBody = new FeeBody(this.formValues.value.amount, this.formValues.value.date, this.formValues.value.description, this.formValues.value.supplier,this.formValues.value.propertyId);
    this.feeService.addFee(fee).pipe(tap(() => this.router.navigateByUrl('/fees'))).subscribe();
  }
}
