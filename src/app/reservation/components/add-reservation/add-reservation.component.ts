import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {PropertyService} from "../../../property/property.service";
import {ReservationService} from "../../reservation.service";
import {PropertySummary} from "../../../property/models/property-summary.model";
import {ReservationBody} from "../../model/reservation-body.model";
import {tap} from "rxjs";

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent implements OnInit {

  constructor(private formBuilder : FormBuilder,
              private reservationService : ReservationService,
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
    amount: [''],
    fromDate: [''],
    toDate: [''],
    reservationDate: [''],
    propertyId: ['']
  });

  onSubmit() {
    let reservation : ReservationBody = new ReservationBody(this.formValues.value.amount,this.formValues.value.reservationDate, this.formValues.value.fromDate, this.formValues.value.toDate,  this.formValues.value.propertyId);
    this.reservationService.addReservation(reservation).pipe(tap(() => this.router.navigateByUrl('/reservations')))
      .pipe(tap(()=>this.router.navigateByUrl("/reservations"))).subscribe();
  }
}
