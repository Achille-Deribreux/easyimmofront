import { Injectable } from '@angular/core';
import {PropertySummary} from "./models/property-summary.model";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }

  demoProperty1: PropertySummary = new PropertySummary(1, "123 Main St", "Property 1");
  demoProperty2: PropertySummary = new PropertySummary(2, "456 Main St", "Property 2");
  demoProperty3: PropertySummary = new PropertySummary(3, "789 Main St", "Property 3");
  demoProperties: PropertySummary[] = [this.demoProperty1, this.demoProperty2, this.demoProperty3];

  getAllProperties() : PropertySummary[] {
    //TODO: http call to get all properties
    return this.demoProperties;
  }

  getProperty(id: number) {
     //TODO make http call to get property with id and precise return type
    return this.demoProperties.find(property => property.id === id);
  }

  addProperty(property: PropertySummary) {
    //TODO make http call to add property
    this.demoProperties.push(property);
  }

  updateProperty(property: PropertySummary) {
    //TODO make http call to update property
    let index = this.demoProperties.findIndex(p => p.id === property.id);
    this.demoProperties[index] = property;
  }

  deleteProperty(id: number) {
    //TODO make http call to delete property
    let index = this.demoProperties.findIndex(p => p.id === id);
    this.demoProperties.splice(index, 1);
  }
}
