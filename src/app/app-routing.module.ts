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

const routes: Routes = [
  {path : 'reservations', component : ReservationListComponent},
  {path : 'reservation/:id', component : ReservationComponent},
  {path : 'properties', component : PropertyListComponent},
  {path : 'property/:id', component : PropertyComponent},
  {path : 'fees', component : FeeListComponent},
  {path : 'fee/:id', component : FeeComponent},
  {path : 'incomes', component : IncomeListComponent},
  {path : 'income/:id', component : IncomeComponent},
  {path : '', component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
