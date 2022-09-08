import {Component, OnInit} from '@angular/core';
import {PropertyService} from "../../property.service";
import {PropertyDetails} from "../../models/property-details.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  property!: PropertyDetails;
  propertyId!: number;

  displayedIncomeColumns: string[] = ['date','description',"amount","button"];
  displayedFeesColumns: string[] = ['date','supplier',"amount","button"];
  displayedReservationColumns: string[] = ['fromDate','toDate',"price","button"];

  constructor(private propertyService: PropertyService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.propertyService.getProperty(this.route.snapshot.params['id']).subscribe({
      next: (property: PropertyDetails) => {
        this.property = property;
      },
     error: (err) => {console.log(err);}
    });

    this.propertyId = this.route.snapshot.params['id'];

    this.propertyService.RefreshRequired.subscribe()
  }

  getBankLoanPercentage(refundedAmount: number, totalAmount : number): number {
    return (refundedAmount/totalAmount)*100;
  }

  deleteProperty(propertyId: number): void {
    this.propertyId = propertyId;
    this.propertyService.deleteProperty(propertyId).subscribe();
    this.router.navigateByUrl('properties');
  }
}
