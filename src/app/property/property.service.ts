import { Injectable } from '@angular/core';
import {PropertySummary} from "./models/property-summary.model";
import {PropertyDetails} from "./models/property-details.model";
import {Observable, Subject, tap} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {PropertyBody} from "./models/property-body.model";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http : HttpClient) { }

  backBaseHost = "https://easy-immo-back.herokuapp.com/";
  backDevHost = "http://localhost:8080/";

  private _refreshRequired = new Subject<void>();

  get RefreshRequired(){
    return this._refreshRequired;
  }

  getAllProperties() : Observable<PropertySummary[]> {
    return this.http.get<PropertySummary[]>(this.backBaseHost+"property/getAll");
  }

  getProperty(id: number) : Observable<PropertyDetails> {
  return this.http.get<PropertyDetails>(this.backBaseHost+"property/getById?id="+id);
  }

  addProperty(property: PropertyBody) : Observable<PropertyBody> {
    return this.http.post<PropertyBody>(this.backBaseHost+"property/add",property);
  }

  editProperty(property: PropertyBody, id : number) : Observable<PropertyBody> {
    const params = new HttpParams()
      .set('id', id);
    return this.http.put<PropertyBody>(this.backBaseHost+"property/update",property, {params});
  }

  deleteProperty(id : number) {
    const params = new HttpParams()
      .set('id', id);
    return this.http.delete(this.backBaseHost+"property/deleteById", {params}).pipe(tap(() => { this._refreshRequired.next(); }));
  }
}
