import { Injectable } from '@angular/core';
import {Fee} from "./fee.model";
import {FeeSummary} from "./model/fee-summary.model";

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  constructor() { }

  demoFee1: Fee = new Fee(1, 1, "Supplier 1", "Description 1", 100, new Date("2019-01-01"));
  demoFee2: Fee = new Fee(2, 1, "Supplier 2", "Description 2", 200, new Date("2019-01-02"));
  demoFee3: Fee = new Fee(3, 1, "Supplier 3", "Description 3", 300, new Date("2019-01-03"));

  demoFee4: Fee = new Fee(4, 2, "Supplier 1", "Description 1", 400, new Date("2019-01-01"));
  demoFee5: Fee = new Fee(5, 2, "Supplier 2", "Description 2", 500, new Date("2019-01-02"));
  demoFee6: Fee = new Fee(6, 2, "Supplier 3", "Description 3", 600, new Date("2019-01-03"));

  demoFee7: Fee = new Fee(7, 3, "Supplier 1", "Description 1", 700, new Date("2019-01-01"));
  demoFee8: Fee = new Fee(8, 3, "Supplier 2", "Description 2", 800, new Date("2019-01-02"));
  demoFee9: Fee = new Fee(9, 3, "Supplier 3", "Description 3", 900, new Date("2019-01-03"));

  demoFees: Fee[] = [this.demoFee1, this.demoFee2, this.demoFee3, this.demoFee4, this.demoFee5, this.demoFee6, this.demoFee7, this.demoFee8, this.demoFee9];

  demoFeeSummary1 :FeeSummary = new FeeSummary(1, new Date("2019-01-01"), 332, "Supplier 1");
  demoFeeSummary2 :FeeSummary = new FeeSummary(2, new Date("2020-01-01"), 2311, "Supplier 1");
  demoFeeSummary3 :FeeSummary = new FeeSummary(3, new Date("2022-01-01"), 1313, "Supplier 1");
  demoFeeSummarys: FeeSummary[] = [this.demoFeeSummary1, this.demoFeeSummary2, this.demoFeeSummary3];

  getAllFees() : FeeSummary[] {
    //TODO: http call to get all fees
    return this.demoFeeSummarys;
  }

  getFeesForProperty(id: number) : Fee[] {
    return this.demoFees.filter(fee => fee.propertyId === id);
  }

  getFee(id: number){
    //TODO make http call to get fee with id and precise return type
    return this.demoFees.find(fee => fee.id === id);
  }

  addFee(fee: Fee) {
    //TODO make http call to add
    this.demoFees.push(fee);
  }

  updateFee(fee: Fee) {
    //TODO make http call to update fee
    let index = this.demoFees.findIndex(i => i.id === fee.id);
    this.demoFees[index] = fee;
  }

  deleteFee(id: number) {
    //TODO make http call to delete fee
    let index = this.demoFees.findIndex(i => i.id === id);
    this.demoFees.splice(index, 1);
  }
}
