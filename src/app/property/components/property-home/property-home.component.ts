import { Component, OnInit } from '@angular/core';
import {PropertySummary} from "../../models/property-summary.model";
import {PropertyService} from "../../property.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-home.component.html',
  styleUrls: ['./property-home.component.scss']
})
export class PropertyHomeComponent implements OnInit {

  properties!: Observable<PropertySummary[]>;
  displayedColumns: string[] = ['type', 'name', 'address',"button"];

  constructor(private propertyService: PropertyService, private router : Router) { }

  ngOnInit(): void {
    this.propertyService.RefreshRequired.subscribe(() => { this.getAllProperties(); });

    this.getAllProperties();
  }

  private getAllProperties() {
    this.properties = this.propertyService.getAllProperties();
  }

  showProperty(id:number) {
    this.router.navigateByUrl('/property/'+id);
  }

  redirectAddNewProperty() {
    this.router.navigateByUrl('/property/add');
  }

}
