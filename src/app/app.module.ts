import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/components/property/property.component';
import { PropertyHomeComponent } from './property/components/property-home/property-home.component';
import { IncomeComponent } from './income/components/income/income.component';
import { IncomeListComponent } from './income/components/income-list/income-list.component';
import { FeeComponent } from './fee/components/fee/fee.component';
import { FeeListComponent } from './fee/components/fee-list/fee-list.component';
import { ReservationComponent } from './reservation/components/reservation/reservation.component';
import { ReservationListComponent } from './reservation/components/reservation-list/reservation-list.component';
import { HeaderComponent } from './header/header.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { IncomeTableComponent } from './income/components/income-table/income-table.component';
import { FeeTableComponent } from './fee/components/fee-table/fee-table.component';
import { ReservationTableComponent } from './reservation/components/reservation-table/reservation-table.component';
import { AddIncomeComponent } from './income/components/add-income/add-income.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from "@angular/material/card";
import {AddFeeComponent} from "./fee/components/add-fee/add-fee.component";
import {AddReservationComponent} from "./reservation/components/add-reservation/add-reservation.component";
import {AddPropertyComponent} from "./property/components/add-property/add-property.component";
import { EditPropertyComponent } from './property/components/edit-property/edit-property.component';
import { PropertyFormComponent } from './property/components/property-form/property-form.component';
import { ReservationFormComponent } from './reservation/components/reservation-form/reservation-form.component';
import { IncomeFormComponent } from './income/components/income-form/income-form.component';
import { FeeFormComponent } from './fee/components/fee-form/fee-form.component';
import { EditFeeComponent } from './fee/components/edit-fee/edit-fee.component';
import { EditIncomeComponent } from './income/components/edit-income/edit-income.component';
import { EditReservationComponent } from './reservation/components/edit-reservation/edit-reservation.component';
import { LoginComponent } from './user/login/components/login/login.component';
import {InterceptorService} from "./user/login/InterceptorService";
import { RegisterComponent } from './user/login/components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertyComponent,
    PropertyHomeComponent,
    IncomeComponent,
    IncomeListComponent,
    FeeComponent,
    FeeListComponent,
    ReservationComponent,
    ReservationListComponent,
    HeaderComponent,
    IncomeTableComponent,
    FeeTableComponent,
    ReservationTableComponent,
    AddIncomeComponent,
    AddFeeComponent,
    AddReservationComponent,
    AddPropertyComponent,
    EditPropertyComponent,
    PropertyFormComponent,
    ReservationFormComponent,
    IncomeFormComponent,
    FeeFormComponent,
    EditFeeComponent,
    EditIncomeComponent,
    EditReservationComponent,
    LoginComponent,
    RegisterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatTableModule,
        HttpClientModule,
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        FormsModule,
        CommonModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatRadioModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatCardModule
    ],
  providers: [
    MatDatepickerModule,
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    {
      provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
