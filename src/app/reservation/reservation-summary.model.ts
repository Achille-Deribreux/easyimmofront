export class ReservationSummary {
  constructor(
    public id: number,
    public fromDate: Date,
    public toDateate: Date,
    public price: number
  ) {
  }
}
