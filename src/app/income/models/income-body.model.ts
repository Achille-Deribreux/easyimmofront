export class IncomeBody {
  constructor(
    public amount: number,
    public date : Date,
    public description : string,
    public propertyId : number,
    public incomeType:String,
    public id? : number
  ) {

  }
}
