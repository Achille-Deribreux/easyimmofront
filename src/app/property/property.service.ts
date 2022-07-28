import { Injectable } from '@angular/core';
import {PropertySummary} from "./models/property-summary.model";
import {PropertyDetails} from "./models/property-details.model";
import {BankLoanSummary} from "./models/bank-loan.summary";
import {FeeSummary} from "../fee/model/fee-summary.model";
import {IncomeSummary} from "../income/models/income-summary.model";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }

  demoProperty1: PropertySummary = new PropertySummary(1, "APARTMENT","123 Main St", "Property 1");
  demoProperty2: PropertySummary = new PropertySummary(2, "HOUSE","456 Main St", "Property 2");
  demoProperty3: PropertySummary = new PropertySummary(3, "HOUSE","789 Main St", "Property 3");
  demoProperties: PropertySummary[] = [this.demoProperty1, this.demoProperty2, this.demoProperty3];

  getAllProperties() : PropertySummary[] {
    //TODO: http call to get all properties
    return this.demoProperties;
  }

  getProperty(id: number) {
     //TODO make http call to get property with id and precise return type
    let fee1 : FeeSummary = new FeeSummary(1,new Date(),100,"Supplier 1");
    let fee2 : FeeSummary = new FeeSummary(2,new Date(),200,"Supplier 2");
    let fee3 : FeeSummary = new FeeSummary(3,new Date(),300,"Supplier 3");
    let feeList: FeeSummary[] = [fee1, fee2, fee3];

    let income1 : IncomeSummary = new IncomeSummary(1,new Date(),100,"income 1");
    let income2 : IncomeSummary = new IncomeSummary(1,new Date(),100,"income 2");
    let income3 : IncomeSummary = new IncomeSummary(1,new Date(),100,"Income 3");
    let incomeList: IncomeSummary[] = [income1, income2, income3];

    let demoFullProperty: PropertyDetails = new PropertyDetails(
      1,
      "123 main st",
      "full demo property 1",
      "LONG",
      "APARTMENT",
      100000,
      new BankLoanSummary(200000,27000,163000),
      feeList,
      incomeList)
    return demoFullProperty;
  }

  addProperty(property: PropertySummary) {
    //TODO make http call to add property
    this.demoProperties.push(property);
  }

  updateProperty(property: PropertySummary) {
    //TODO make http call to update property
    let index = this.demoProperties.findIndex(p => p.id === property.id);
    this.demoProperties[index] = property;
  }

  deleteProperty(id: number) {
    //TODO make http call to delete property
    let index = this.demoProperties.findIndex(p => p.id === id);
    this.demoProperties.splice(index, 1);
  }
}
