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

  submitCase : string = "add";
}
