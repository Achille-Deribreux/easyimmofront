export class ReservationSummary {
  constructor(
    public id: number,
    public propertyName: string,
    public fromDate: Date,
    public toDate: Date,
    public price: number
  ) {
  }
}
