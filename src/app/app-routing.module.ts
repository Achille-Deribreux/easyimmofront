import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ReservationListComponent} from "./reservation/components/reservation-list/reservation-list.component";
import {PropertyListComponent} from "./property/components/property-list/property-list.component";
import {FeeListComponent} from "./fee/components/fee-list/fee-list.component";
import {IncomeListComponent} from "./income/components/income-list/income-list.component";
import {PropertyComponent} from "./property/components/property/property.component";
import {IncomeComponent} from "./income/components/income/income.component";
import {FeeComponent} from "./fee/components/fee/fee.component";
import {ReservationComponent} from "./reservation/components/reservation/reservation.component";
import {AddIncomeComponent} from "./income/components/add-income/add-income.component";
import {AddPropertyComponent} from "./property/components/add-property/add-property.component";
import {AddFeeComponent} from "./fee/components/add-fee/add-fee.component";
import {AddReservationComponent} from "./reservation/components/add-reservation/add-reservation.component";
import {EditPropertyComponent} from "./property/components/edit-property/edit-property.component";

const routes: Routes = [
  {path : 'reservations', component : ReservationListComponent},
  {path : 'reservation/add', component : AddReservationComponent},
  {path : 'reservation/:id', component : ReservationComponent},
  {path : 'properties', component : PropertyListComponent},
  {path : 'property/add', component : AddPropertyComponent},
  {path : 'property/update/:id', component : EditPropertyComponent},
  {path : 'property/:id', component : PropertyComponent},
  {path : 'fees', component : FeeListComponent},
  {path : 'fee/add', component : AddFeeComponent},
  {path : 'fee/:id', component : FeeComponent},
  {path : 'income/add', component : AddIncomeComponent},
  {path : 'incomes', component : IncomeListComponent},
  {path : 'income/:id', component : IncomeComponent},
  {path : '', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
