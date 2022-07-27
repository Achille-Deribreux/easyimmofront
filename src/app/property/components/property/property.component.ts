import {Component, OnInit} from '@angular/core';
import {PropertyService} from "../../property.service";
import {Property} from "../../property.model";

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  //property!: Property;

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    //this.propertyService.getProperty(this.property.id);
  }

}
