export class IncomeBody {
  constructor(
    public amount: number,
    public date : Date,
    public description : string,
    public id? : number,
    public propertyId? : number
  ) {

  }
}
