import {PropertySummary} from "../../property/models/property-summary.model";

export class FeeDetail {
  constructor(
    public amount: number,
    public date: Date,
    public description: string,
    public id: number,
    public supplier: string,
    public property: PropertySummary
  ) {}
}
