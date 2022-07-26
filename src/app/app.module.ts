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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
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
