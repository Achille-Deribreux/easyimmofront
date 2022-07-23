export class Income{
  constructor(
        public id:number,
        public propertyId:number,
        public description:string,
        public incomeAmount:number,
        public incomeDate:Date
    ){}
}
