import { PropertySummary } from "src/app/property/models/property-summary.model";

export class IncomeDetails {
    constructor(
      public id: number,
      public date: Date,
      public amount: number,
      public description: string,
      public property: PropertySummary,
      public incomeType: String
    ) {
    }
  }