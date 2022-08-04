import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/components/property/property.component';
import { PropertyListComponent } from './property/components/property-list/property-list.component';
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
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { IncomeTableComponent } from './income/components/income-table/income-table.component';
import { FeeTableComponent } from './fee/components/fee-table/fee-table.component';
import { ReservationTableComponent } from './reservation/components/reservation-table/reservation-table.component';
import { AddIncomeComponent } from './income/components/add-income/add-income.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertyComponent,
    PropertyListComponent,
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
    AddIncomeComponent
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
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
