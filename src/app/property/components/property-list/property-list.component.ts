import { Component, OnInit } from '@angular/core';
import {PropertySummary} from "../../models/property-summary.model";
import {PropertyService} from "../../property.service";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties!: PropertySummary[];
  displayedColumns: string[] = ['type', 'name', 'address'];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.properties = this.propertyService.getAllProperties();
  }

}
