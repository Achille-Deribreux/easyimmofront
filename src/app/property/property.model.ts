export class Property {
  constructor(
      public id:number,
      public address:string,
      public name:string,
      public buyPrice:number,
      public type:string,
      public rentType:string,
      public userId?:number
  ) {
  }
}
