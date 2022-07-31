import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {PropertyService} from "../../property.service";
import {PropertyBody} from "../../models/property-body.model";

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private propertyService: PropertyService) { }

  formValues = this.formBuilder.group({
    name: [''],
    address: [''],
    type: [''],
    rentType: [''],
    buyPrice: ['']
  });

  ngOnInit(): void {
  }

  onSubmit() {
    let property = new PropertyBody(this.formValues.value.name,this.formValues.value.address,this.formValues.value.type,this.formValues.value.rentType,this.formValues.value.buyPrice);
    this.propertyService.addProperty(property).subscribe();
  }
}
