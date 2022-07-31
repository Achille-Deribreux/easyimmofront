import {Component, OnInit} from '@angular/core';
import {PropertyService} from "../../property.service";
import {PropertyDetails} from "../../models/property-details.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  property!: PropertyDetails;

  displayedIncomeColumns: string[] = ['date','description',"amount","button"];
  displayedFeesColumns: string[] = ['date','supplier',"amount","button"];
  displayedReservationColumns: string[] = ['fromDate','toDate',"price","button"];

  constructor(private propertyService: PropertyService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.propertyService.getProperty(this.route.snapshot.params['id']).subscribe({
      next: (property: PropertyDetails) => {
        this.property = property;
      },
     error: (err) => {console.log(err);}
    });
  }

  getBankLoanPercentage(refundedAmount: number, totalAmount : number): number {
    return (refundedAmount/totalAmount)*100;
  }

}
