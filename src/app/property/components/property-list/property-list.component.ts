import { Component, OnInit } from '@angular/core';
import {Property} from "../../property.model";
import {PropertyService} from "../../property.service";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  property!: Property[];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.property = this.propertyService.getAllProperties();
  }

}
