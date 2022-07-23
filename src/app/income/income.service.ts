import { Injectable } from '@angular/core';
import {Income} from "./income.model";

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor() { }

  demoIncome1: Income = new Income(1, 1, "Income 1 for property 1", 768, new Date("2020-01-01"));
  demoIncome2: Income = new Income(2, 1, "Income 2 for property 1", 2342, new Date("2020-01-02"));
  demoIncome3: Income = new Income(3, 1, "Income 3 for property 1", 234234, new Date("2020-01-03"));

  demoIncome4: Income = new Income(4, 2, "Income 1 for property 2", 1000, new Date("2019-01-01"));
  demoIncome5: Income = new Income(5, 2, "Income 2 for property 2", 8970, new Date("2020-01-01"));
  demoIncome6: Income = new Income(6, 2, "Income 3 for property 2", 975, new Date("2022-01-01"));

  demoIncome7: Income = new Income(7, 3, "Income 1 for property 3", 1000, new Date("2020-01-01"));
  demoIncome8: Income = new Income(8, 3, "Income 2 for property 3", 2000, new Date("2020-01-02"));
  demoIncome9: Income = new Income(9, 3, "Income 3 for property 3", 3000, new Date("2020-01-03"));

  demoIncomes: Income[] = [this.demoIncome1, this.demoIncome2, this.demoIncome3, this.demoIncome4, this.demoIncome5, this.demoIncome6, this.demoIncome7, this.demoIncome8, this.demoIncome9];

  getAllIncomes() : Income[] {
    //TODO: http call to get all properties
    return this.demoIncomes;
  }

  getIncomesForProperty(id: number) : Income[] {
    return this.demoIncomes.filter(income => income.propertyId === id);
  }

  getIncome(id: number){
    //TODO make http call to get property with id and precise return type
    return this.demoIncomes.find(income => income.id === id);
  }

  addIncome(income: Income) {
    //TODO make http call to add
    this.demoIncomes.push(income);
  }

  updateIncome(income: Income) {
    //TODO make http call to update income
    let index = this.demoIncomes.findIndex(i => i.id === income.id);
    this.demoIncomes[index] = income;
  }

  deleteIncome(id: number) {
    //TODO make http call to delete
    let index = this.demoIncomes.findIndex(i => i.id === id);
    this.demoIncomes.splice(index, 1);
  }
}
