import { Injectable } from '@angular/core';
import {PropertySummary} from "./models/property-summary.model";
import {PropertyDetails} from "./models/property-details.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PropertyBody} from "./models/property-body.model";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {


  constructor(private http : HttpClient) { }

  backBaseHost = "https://easy-immo-back.herokuapp.com/";
  backDevHost = "http://localhost:8080/";

  getAllProperties() : Observable<PropertySummary[]> {
    return this.http.get<PropertySummary[]>(this.backDevHost+"property/getAll");
  }

  getProperty(id: number) : Observable<PropertyDetails> {
  return this.http.get<PropertyDetails>(this.backDevHost+"property/getById?id="+id);
  }

  addProperty(property: PropertyBody) : Observable<PropertyBody> {
    //console.log(property);
    return this.http.post<PropertyBody>(this.backDevHost+"property/add",property);
  }
}
