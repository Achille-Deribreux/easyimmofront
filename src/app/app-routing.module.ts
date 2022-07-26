import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ReservationHomeComponent} from "./reservation/components/reservation-home/reservation-home.component";
import {PropertyHomeComponent} from "./property/components/property-home/property-home.component";
import {FeeHomeComponent} from "./fee/components/fee-home/fee-home.component";
import {IncomeHomeComponent} from "./income/components/income-home/income-home.component";
import {PropertyComponent} from "./property/components/property/property.component";
import {IncomeComponent} from "./income/components/income/income.component";
import {FeeComponent} from "./fee/components/fee/fee.component";
import {ReservationComponent} from "./reservation/components/reservation/reservation.component";
import {AddIncomeComponent} from "./income/components/add-income/add-income.component";
import {AddPropertyComponent} from "./property/components/add-property/add-property.component";
import {AddFeeComponent} from "./fee/components/add-fee/add-fee.component";
import {AddReservationComponent} from "./reservation/components/add-reservation/add-reservation.component";
import {EditPropertyComponent} from "./property/components/edit-property/edit-property.component";
import {EditFeeComponent} from "./fee/components/edit-fee/edit-fee.component";
import {EditIncomeComponent} from "./income/components/edit-income/edit-income.component";
import {EditReservationComponent} from "./reservation/components/edit-reservation/edit-reservation.component";
import {LoginComponent} from "./user/login/components/login/login.component";
import {RegisterComponent} from "./user/login/components/register/register.component";

const routes: Routes = [
  {path : 'reservations', component : ReservationHomeComponent},
  {path : 'reservation/add', component : AddReservationComponent},
  {path : 'reservation/update/:id', component : EditReservationComponent},
  {path : 'reservation/:id', component : ReservationComponent},
  {path : 'properties', component : PropertyHomeComponent},
  {path : 'property/add', component : AddPropertyComponent},
  {path : 'property/update/:id', component : EditPropertyComponent},
  {path : 'property/:id', component : PropertyComponent},
  {path : 'fees', component : FeeHomeComponent},
  {path : 'fee/add', component : AddFeeComponent},
  {path : 'fee/update/:id', component : EditFeeComponent},
  {path : 'fee/:id', component : FeeComponent},
  {path : 'income/add', component : AddIncomeComponent},
  {path : 'income/update/:id', component : EditIncomeComponent},
  {path : 'incomes', component : IncomeHomeComponent},
  {path : 'income/:id', component : IncomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'register', component : RegisterComponent},
  {path : '', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
