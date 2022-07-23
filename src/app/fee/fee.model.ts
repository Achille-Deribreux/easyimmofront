export class Fee{
  constructor(
      public id:number,
      public propertyId : number,
      public supplier : string,
      public description:string,
      public amount:number,
      public date:Date
  ) {}
}
