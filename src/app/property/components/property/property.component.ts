import {Component, OnInit} from '@angular/core';
import {PropertyService} from "../../property.service";
import {PropertyDetails} from "../../models/property-details.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  property!: PropertyDetails;

  displayedIncomeColumns: string[] = ['date','description',"amount","button"];
  displayedFeesColumns: string[] = ['date','supplier',"price","button"];
  displayedReservationColumns: string[] = ['fromDate','toDate',"price","button"];

  constructor(private propertyService: PropertyService, private router : Router) { }

  ngOnInit(): void {
    this.property = this.propertyService.getProperty(1);
  }

  getBankLoanPercentage(): number {
    return (this.property.bankLoanSummary.refundedAmount/this.property.bankLoanSummary.totalAmount)*100;
  }

  showFee(id:number) {
    this.router.navigateByUrl('/fee/'+id);
  }

  showReservation(id:number) {
    this.router.navigateByUrl('/reservation/'+id);
  }

}
