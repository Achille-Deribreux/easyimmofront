export class FeeBody {
  constructor(
    public amount: number,
    public date: Date,
    public description: string,
    public supplier: string,
    public propertyId: number
  ) {}
}
