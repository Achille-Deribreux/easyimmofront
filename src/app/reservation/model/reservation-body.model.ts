export class ReservationBody{
  constructor(
    public amount:number,
    public reservationDate:Date,
    public fromDate:Date,
    public toDate:Date,
    public propertyId:number,
  ) {
  }
}
