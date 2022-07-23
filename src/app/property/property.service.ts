import { Injectable } from '@angular/core';
import {Property} from "./property.model";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor() { }

  demoProperty1: Property = new Property(1, "123 Main St", "Property 1", 100000, "APPARTMENT", "SHORT");
  demoProperty2: Property = new Property(2, "456 Main St", "Property 2", 200000, "HOUSE", "LONG");
  demoProperty3: Property = new Property(3, "789 Main St", "Property 3", 300000, "HOUSE", "LONG");
  demoProperties: Property[] = [this.demoProperty1, this.demoProperty2, this.demoProperty3];

  getAllProperties() : Property[] {
    //TODO: http call to get all properties
    return this.demoProperties;
  }

  getProperty(id: number) {
     //TODO make http call to get property with id and precise return type
    return this.demoProperties.find(property => property.id === id);
  }

  addProperty(property: Property) {
    //TODO make http call to add property
    this.demoProperties.push(property);
  }

  updateProperty(property: Property) {
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
