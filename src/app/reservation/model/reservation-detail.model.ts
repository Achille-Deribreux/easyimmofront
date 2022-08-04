import {IncomeSummary} from "../../income/models/income-summary.model";
import {FeeSummary} from "../../fee/model/fee-summary.model";
import {PropertySummary} from "../../property/models/property-summary.model";

export class ReservationDetail {
  constructor(
    public reservationDate: Date,
    public fromDate: Date,
    public toDate: Date,
    public income:IncomeSummary,
    public property:PropertySummary,
    public feeList:FeeSummary[],
    public id:number
  ) {
  }
}
