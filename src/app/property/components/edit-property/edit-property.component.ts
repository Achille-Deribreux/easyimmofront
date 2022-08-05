import { Component, OnInit } from '@angular/core';
import {PropertyService} from "../../property.service";
import {FormBuilder, FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyBody} from "../../models/property-body.model";
import {tap} from "rxjs";

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.scss']
})
export class EditPropertyComponent implements OnInit {

  constructor(private formbuilder: FormBuilder,
              private propertyService: PropertyService,
              private route:ActivatedRoute,
              private router:Router) { }

  id!:number;

  formValues = this.formbuilder.group({
    name: new FormControl(''),
    address: new FormControl(''),
    type: new FormControl(''),
    rentType: new FormControl(''),
    buyPrice:new FormControl('')
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.propertyService.getProperty(this.id).subscribe(property => {
      this.formValues = this.formbuilder.group({
        name: new FormControl(property.name),
        address: new FormControl(property.address),
        type: new FormControl( property.type),
        rentType: new FormControl(property.rentType),
        buyPrice:new FormControl(property.buyPrice)
      });
    });
  }

  onSubmit() {
    let value = this.formValues.value;
    let property = new PropertyBody(value.name,value.address,value.type, value.rentType,value.buyPrice);
    this.propertyService.editProperty(property,this.id).pipe(tap(()=>this.router.navigateByUrl("/properties"))).subscribe();
  }

}
