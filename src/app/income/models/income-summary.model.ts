export class IncomeSummary {
  constructor(
    public date: Date,
    public amount: number,
    public description: string,
    public id? : number,
    public propertyId? : number
  ) {
  }
}
