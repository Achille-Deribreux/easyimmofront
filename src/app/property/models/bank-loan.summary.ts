export class BankLoanSummary {
  constructor(
    public totalAmount: number,
    public dueAmount: number,
    public refundedAmount: number
  ) {
  }
}
