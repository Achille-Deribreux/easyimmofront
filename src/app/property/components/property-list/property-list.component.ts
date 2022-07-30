import { Component, OnInit } from '@angular/core';
import {PropertySummary} from "../../models/property-summary.model";
import {PropertyService} from "../../property.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties!: Observable<PropertySummary[]>;
  displayedColumns: string[] = ['type', 'name', 'address',"button"];

  constructor(private propertyService: PropertyService, private router : Router) { }

  ngOnInit(): void {
    this.properties = this.propertyService.getAllProperties();
  }

  showProperty(id:number) {
    this.router.navigateByUrl('/property/'+id);
  }

}
