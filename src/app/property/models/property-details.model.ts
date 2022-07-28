import {BankLoanSummaryModel} from "./bank-loan-summary.model";
import {FeeSummary} from "../../fee/model/fee-summary.model";
import {IncomeSummary} from "../../income/models/income-summary.model";
import {ReservationSummary} from "../../reservation/reservation-summary.model";

export class PropertyDetails {
  constructor(
    public id: number,
    public address: string,
    public name: string,
    public rentType: string,
    public type: string,
    public buyPrice: number,
    public bankLoanSummary: BankLoanSummaryModel,
    public fees: FeeSummary[],
    public incomes: IncomeSummary[],
    public reservations?: ReservationSummary[]
  ) {
  }
}
