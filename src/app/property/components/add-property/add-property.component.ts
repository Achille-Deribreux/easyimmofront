import { Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {PropertyService} from "../../property.service";
import {PropertyBody} from "../../models/property-body.model";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent {

  constructor(private formBuilder:FormBuilder,private propertyService: PropertyService,private router : Router) { }

  formValues = this.formBuilder.group({
    name: [''],
    address: [''],
    type: [''],
    rentType: [''],
    buyPrice: ['']
  });

  onSubmit() {
    let value = this.formValues.value;
    let property = new PropertyBody(value.name,value.address,value.type, value.rentType,value.buyPrice);
    this.propertyService.addProperty(property).pipe(tap(()=>this.router.navigateByUrl("/properties"))).subscribe();
  }
}
