export class BankLoanSummaryModel {
  constructor(
    public totalAmount: number,
    public dueAmount: number,
    public refundedAmount: number
  ) {
  }
}
