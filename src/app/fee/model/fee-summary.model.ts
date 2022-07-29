export class FeeSummary{
  constructor(
    public id:number,
    public date:Date,
    public amount:number,
    public supplier:string
  ){}
}
