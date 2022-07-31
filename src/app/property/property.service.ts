import { Injectable } from '@angular/core';
import {PropertySummary} from "./models/property-summary.model";
import {PropertyDetails} from "./models/property-details.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {


  constructor(private http : HttpClient) { }

  backBaseHost = "https://easy-immo-back.herokuapp.com/";

  getAllProperties() : Observable<PropertySummary[]> {
    return this.http.get<PropertySummary[]>(this.backBaseHost+"property/getAll");
  }

  getProperty(id: number) : Observable<PropertyDetails> {
  return this.http.get<PropertyDetails>(this.backBaseHost+"property/getById?id="+id);
  }
}
