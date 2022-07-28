import { Injectable } from '@angular/core';
import {FeeSummary} from "./model/fee-summary.model";

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  demoFeeSummary1 :FeeSummary = new FeeSummary(1, new Date("2019-01-01"), 332, "Supplier 1");
  demoFeeSummary2 :FeeSummary = new FeeSummary(2, new Date("2020-01-01"), 2311, "Supplier 1");
  demoFeeSummary3 :FeeSummary = new FeeSummary(3, new Date("2022-01-01"), 1313, "Supplier 1");
  demoFeeSummarys: FeeSummary[] = [this.demoFeeSummary1, this.demoFeeSummary2, this.demoFeeSummary3];

  getAllFees() : FeeSummary[] {
    //TODO: http call to get all fees
    return this.demoFeeSummarys;
  }
}
