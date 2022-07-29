import {Component, OnInit} from '@angular/core';
import {PropertyService} from "../../property.service";
import {PropertyDetails} from "../../models/property-details.model";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  property!: PropertyDetails;

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.property = this.propertyService.getProperty(1);
  }

}
