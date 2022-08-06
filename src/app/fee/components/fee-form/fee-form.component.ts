import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {FeeService} from "../../fee.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyService} from "../../../property/property.service";
import {PropertySummary} from "../../../property/models/property-summary.model";
import {FeeBody} from "../../model/fee-body.model";
import {tap} from "rxjs";

@Component({
  selector: 'app-fee-form',
  templateUrl: './fee-form.component.html',
  styleUrls: ['./fee-form.component.scss']
})
export class FeeFormComponent implements OnInit {

  id!:number;
  @Input() submitCase!:string;
  properties!: PropertySummary[];

  formValues = this.formBuilder.group({
    supplier: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(''),
    description: new FormControl(''),
    propertyId: new FormControl(''),
  });

  constructor(private formBuilder : FormBuilder,
              private feeService : FeeService,
              private router : Router,
              private propertyService : PropertyService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    if(this.submitCase === 'update') {
      this.id = this.route.snapshot.params['id'];
      this.feeService.getFee(this.id).subscribe(fee => {
        this.formValues = this.formBuilder.group({
          supplier: [fee.supplier],
          amount: [fee.amount],
          date: [fee.date],
          description: [fee.description],
          propertyId: [fee.propertyId]
        });
      });
    }
    this.propertyService.getAllProperties().subscribe({
        next: (properties: PropertySummary[]) => {
          this.properties = properties;
        }
      }
    );
  }

  onSubmit() {
    let value = this.formValues.value;
    let fee : FeeBody = new FeeBody(value.amount, value.date, value.description, value.supplier,value.propertyId);
    if(this.submitCase === 'add') {
      this.feeService.addFee(fee).pipe(tap(() => this.router.navigateByUrl('/fees'))).subscribe();
    }
    else {
      this.feeService.editFee(fee, this.id).pipe(tap(() => this.router.navigateByUrl('/fees'))).subscribe();
    }
  }

}
