import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {ReservationService} from "../../reservation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyService} from "../../../property/property.service";
import {PropertySummary} from "../../../property/models/property-summary.model";
import {ReservationBody} from "../../model/reservation-body.model";
import {tap} from "rxjs";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent implements OnInit {

  properties!: PropertySummary[];
  id!:number;
  @Input() submitCase!:string;

  formValues = this.formBuilder.group({
    amount: new FormControl(''),
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    reservationDate: new FormControl(''),
    propertyId: new FormControl(''),
  });

  constructor(private formBuilder : FormBuilder,
              private reservationService : ReservationService,
              private route:ActivatedRoute,
              private router : Router,
              private propertyService : PropertyService) { }


  ngOnInit(): void {
    if(this.submitCase === 'update') {
      this.id = this.route.snapshot.params['id'];
      this.reservationService.getReservation(this.id).subscribe(reservation => {
        this.formValues = this.formBuilder.group({
          amount: new FormControl(reservation.income.amount),
          fromDate: new FormControl(reservation.fromDate),
          toDate: new FormControl(reservation.toDate),
          reservationDate: new FormControl(reservation.reservationDate),
          propertyId: new FormControl(reservation.property.id),
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
    let reservation : ReservationBody = new ReservationBody(value.amount,value.reservationDate, value.fromDate, value.toDate,value.propertyId);
    if(this.submitCase === 'add') {
      this.reservationService.addReservation(reservation).pipe(tap(() => this.router.navigateByUrl('/reservations')))
        .pipe(tap(() => this.router.navigateByUrl("/reservations"))).subscribe();
    }
    else {
      this.reservationService.editReservation(reservation,this.id).pipe(tap(() => this.router.navigateByUrl('/reservations'))).subscribe();
    }
  }

}
