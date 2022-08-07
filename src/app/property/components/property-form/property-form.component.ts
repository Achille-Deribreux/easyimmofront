import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl} from "@angular/forms";
import {PropertyService} from "../../property.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PropertyBody} from "../../models/property-body.model";
import {tap} from "rxjs";

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.scss']
})
export class PropertyFormComponent implements OnInit {

  constructor(private formbuilder: FormBuilder,
              private propertyService: PropertyService,
              private route:ActivatedRoute,
              private router:Router) { }

  id!:number;
  @Input() submitCase!:string;

  formValues = this.formbuilder.group({
    name: new FormControl(''),
    address: new FormControl(''),
    type: new FormControl(''),
    rentType: new FormControl(''),
    buyPrice:new FormControl('')
  });

  ngOnInit(): void {
    if (this.submitCase === 'update') {
      this.id = this.route.snapshot.params['id'];
      this.propertyService.getProperty(this.id).subscribe(property => {
        this.formValues = this.formbuilder.group({
          name: new FormControl(property.name),
          address: new FormControl(property.address),
          type: new FormControl(property.type),
          rentType: new FormControl(property.rentType),
          buyPrice: new FormControl(property.buyPrice)
        });
      });
    }
  }

  onSubmit() {
    let value = this.formValues.value;
    let property = new PropertyBody(value.name,value.address,value.type, value.rentType,value.buyPrice);
    if(this.submitCase === 'add') {
      this.propertyService.addProperty(property).pipe(tap(()=>this.router.navigateByUrl("/properties"))).subscribe();
    }else {
      this.propertyService.editProperty(property,this.id).pipe(tap(()=>this.router.navigateByUrl("/properties"))).subscribe();
    }
  }

}
