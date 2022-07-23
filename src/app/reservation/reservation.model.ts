export class Reservation{
    constructor(
        public id:number,
        public propertyId:number,
        public reservationDate:Date,
        public fromDate:Date,
        public toDate:Date,
        public incomeId:number,
        public FeesId:number[],
    ){}
}
