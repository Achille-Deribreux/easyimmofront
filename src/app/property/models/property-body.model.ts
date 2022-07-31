export class PropertyBody {

  constructor(
    public name:string,
    public address:string,
    public type:string,
    public rentType:string,
    public prixAchat:number,
    public id? : number
  ) {
  }
}
